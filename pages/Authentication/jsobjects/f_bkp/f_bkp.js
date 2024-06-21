export default {
	// Daniel T. K. W. - github.com/danieltkw - danielkopolo95@gmail.com

	bcrypt: window.dcodeIO ? window.dcodeIO.bcrypt : null,
	jwt: window.jsonwebtoken ? window.jsonwebtoken : null,
	translations: {},

	setTranslations: (translations) => {
		this.translations = translations;
	},

	defaultTab: 'Sign In',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},

	generatePasswordHash: async () => {
		if (!this.bcrypt) {
			showAlert(this.translations.error_bcrypt, 'error');
			return;
		}
		return this.bcrypt.hashSync(inp_registerPassword.text, 10);
	},

	verifyHash: async (password, hash) => {
		if (!this.bcrypt) {
			showAlert(this.translations.error_bcrypt, 'error');
			return;
		}
		return this.bcrypt.compareSync(password, hash);
	},

	createToken: async (user) => {
		if (!this.jwt) {
			showAlert(this.translations.error_jwt, 'error');
			return;
		}
		return this.jwt.sign(user, 'secret', { expiresIn: 60 * 60 });
	},

	signIn: async () => {
		const password = inp_password.text;
		const user = await findUserByEmail.run();

		if (user && await this.verifyHash(password, user.password_hash)) {
			const token = await this.createToken(user);
			storeValue('token', token);
			await updateLogin.run({ id: user.id });
			showAlert(this.translations.success_login, 'success');
		} else {
			showAlert(this.translations.error_login, 'error');
		}
	},

	register: async () => {
		const passwordHash = await this.generatePasswordHash();
		const user = await createUser.run({ passwordHash });
		if (user) {
			const token = await this.createToken(user);
			storeValue('token', token);
			showAlert(this.translations.success_register, 'success');
		} else {
			showAlert(this.translations.error_register, 'error');
		}
	},

	generateRandomUsers: async (numUsers) => {
		for (let i = 0; i < numUsers; i++) {
			const firstName = `TestFirstName${i}`;
			const lastName = `TestLastName${i}`;
			const email = `test${i}@example.com`;
			const password = `Password${i}`;
			const passwordHash = this.bcrypt ? this.bcrypt.hashSync(password, 10) : password;

			await createUser.run({
				inp_firstName: firstName,
				inp_lastName: lastName,
				inp_registerEmail: email,
				passwordHash: passwordHash
			});
		}
		showAlert(`${numUsers} ${this.translations.success_random_users}`, 'success');
	}
};