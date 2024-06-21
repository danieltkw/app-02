export default {
    bcrypt: {
        hashSync: (password, salt) => btoa(password), // Simple base64 encoding as a placeholder
        compareSync: (password, hash) => btoa(password) === hash
    },
    jwt: {
        sign: (user, secret, options) => btoa(JSON.stringify(user)) // Simple base64 encoding as a placeholder
    },
    translations: {},

    setTranslations: function (translations) {
        this.translations = translations;
    },

    defaultTab: 'Sign In',

    setDefaultTab: function (newTab) {
        this.defaultTab = newTab;
    },

    generatePasswordHash: async function () {
        return this.bcrypt.hashSync(inp_registerPassword.text, 10);
    },

    verifyHash: async function (password, hash) {
        return this.bcrypt.compareSync(password, hash);
    },

    createToken: async function (user) {
        return this.jwt.sign(user, 'secret', { expiresIn: 60 * 60 });
    },

    signIn: async function () {
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

    register: async function () {
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

    generateRandomUsers: async function (numUsers) {
        for (let i = 0; i < numUsers; i++) {
            const firstName = `TestFirstName${i}`;
            const lastName = `TestLastName${i}`;
            const email = `test${i}@example.com`;
            const password = `Password${i}`;
            const passwordHash = this.bcrypt.hashSync(password, 10);

            await createUser.run({
                inp_firstName: firstName,
                inp_lastName: lastName,
                inp_registerEmail: email,
                passwordHash: passwordHash
            });
        }
        showAlert(`${numUsers} ${this.translations.success_random_users}`, 'success');
    },

    initializeTranslations: function (lang) {
        const translations = {
            pt: {
                login: 'Login',
                welcome: 'Bem vindo! Entre seus dados.',
                email: 'Email',
                password: 'Password',
                signIn: 'Entrar',
                signUp: 'Cadastrar-se',
                error_bcrypt: 'A biblioteca bcrypt não está disponível',
                error_jwt: 'A biblioteca jsonwebtoken não está disponível',
                success_login: 'Login bem-sucedido',
                error_login: 'Combinação inválida de email/senha',
                success_register: 'Registro bem-sucedido',
                error_register: 'Erro ao criar novo usuário',
                success_random_users: 'usuários de teste criados com sucesso'
            },
            en: {
                login: 'Login',
                welcome: 'Welcome! Enter your details.',
                email: 'Email',
                password: 'Password',
                signIn: 'Sign In',
                signUp: 'Sign Up',
                error_bcrypt: 'bcrypt library is not available',
                error_jwt: 'jsonwebtoken library is not available',
                success_login: 'Login Successful',
                error_login: 'Invalid email/password combination',
                success_register: 'Register Successful',
                error_register: 'Error creating new user',
                success_random_users: 'test users created successfully'
            },
            // Add other languages here...
        };
        this.setTranslations(translations[lang]);
    }
};








