export default {
    initializeApp: function () {
        const language = 'pt'; // or dynamically set this based on user preference
        functions.initializeTranslations(language); // Ensure translations are set
    }
};