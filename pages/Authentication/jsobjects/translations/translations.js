export default {
	
	// Daniel T. K. W. - github.com/danieltkw - danielkopolo95@gmail.com

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
    es: {
        login: 'Iniciar sesión',
        welcome: '¡Bienvenido! Ingrese sus datos.',
        email: 'Correo electrónico',
        password: 'Contraseña',
        signIn: 'Iniciar sesión',
        signUp: 'Regístrate',
        error_bcrypt: 'La biblioteca bcrypt no está disponible',
        error_jwt: 'La biblioteca jsonwebtoken no está disponible',
        success_login: 'Inicio de sesión exitoso',
        error_login: 'Combinación de correo electrónico/contraseña inválida',
        success_register: 'Registro exitoso',
        error_register: 'Error al crear un nuevo usuario',
        success_random_users: 'usuarios de prueba creados con éxito'
    },
    fr: {
        login: 'Connexion',
        welcome: 'Bienvenue! Entrez vos informations.',
        email: 'E-mail',
        password: 'Mot de passe',
        signIn: 'Se connecter',
        signUp: 'S\'inscrire',
        error_bcrypt: 'La bibliothèque bcrypt n\'est pas disponible',
        error_jwt: 'La bibliothèque jsonwebtoken n\'est pas disponible',
        success_login: 'Connexion réussie',
        error_login: 'Combinaison email/mot de passe invalide',
        success_register: 'Inscription réussie',
        error_register: 'Erreur lors de la création d\'un nouvel utilisateur',
        success_random_users: 'utilisateurs de test créés avec succès'
    },
    de: {
        login: 'Anmeldung',
        welcome: 'Willkommen! Geben Sie Ihre Daten ein.',
        email: 'E-Mail',
        password: 'Passwort',
        signIn: 'Anmelden',
        signUp: 'Registrieren',
        error_bcrypt: 'Die Bibliothek bcrypt ist nicht verfügbar',
        error_jwt: 'Die Bibliothek jsonwebtoken ist nicht verfügbar',
        success_login: 'Anmeldung erfolgreich',
        error_login: 'Ungültige E-Mail/Passwort-Kombination',
        success_register: 'Registrierung erfolgreich',
        error_register: 'Fehler beim Erstellen eines neuen Benutzers',
        success_random_users: 'Testbenutzer erfolgreich erstellt'
       };
        this.setTranslations(translations[lang]);  
};

