// Load translations from your JSON file
fetch('translation.json')
    .then(response => response.json())
    .then(translations => {
        // Detect the user's browser language
        const userLanguage = navigator.language

        // Set a default language
        let selectedLanguage = 'en-GB';
        // Check if translations are available for the user's language
        if (translations[userLanguage]) {
            selectedLanguage = userLanguage;
        } else if(startsWithFr(userLanguage)){
            selectedLanguage = 'fr'
        } else if(startsWithEs(userLanguage)){
            selectedLanguage = 'es'
        }

        // Function to update text elements
        function translatePage() {
            const elementsToTranslate = document.querySelectorAll('[data-translate]');

            elementsToTranslate.forEach(element => {
                const translationKey = element.getAttribute('data-translate');
                if (translations[selectedLanguage][translationKey]) {
                    element.textContent = translations[selectedLanguage][translationKey];
                }
            });
        }

        // Initial translation
        translatePage();

        // Add an event listener to update translations if the user changes the language
        // document.querySelector('#language-select').addEventListener('change', function () {
        //     selectedLanguage = this.value;
        //     translatePage();
        // });
    })
    .catch(error => console.error('Error loading translations:', error));

function startsWithFr(inputString) {
    const lowerCasedString = inputString.toLowerCase();
    return lowerCasedString.substring(0, 2) === "fr";
}

function startsWithEs(inputString) {
    const lowerCasedString = inputString.toLowerCase();
    return lowerCasedString.substring(0, 2) === "es";
}
