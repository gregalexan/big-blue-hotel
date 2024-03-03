/* This file is about changing the Language across the Website */
/* and keeping the same language in every page. */

/* Handles language switching and stores language preference */
document.addEventListener("DOMContentLoaded", function() {
    var languageSelect = document.getElementById("languageSelect");
    var englishDiv = document.querySelector('.english');
    var greekDiv = document.querySelector('.greek');

    /* Handles language selection change */
    function handleLanguageChange() {
        var selectedLanguage = languageSelect.value;
        /* Stores the selected language preference in local storage */
        localStorage.setItem("selectedLanguage", selectedLanguage);

        /* Shows / hides language content based on selection */
        if (selectedLanguage === 'english') {
            englishDiv.style.display = 'block';
            greekDiv.style.display = 'none';
        } else if (selectedLanguage === 'greek') {
            englishDiv.style.display = 'none';
            greekDiv.style.display = 'block';
        }
    }

    /* Adds event listener to language select dropdown */
    languageSelect.addEventListener("change", handleLanguageChange);

    /* Sets the selected language from local storage on page load */
    function setSelectedLanguage() {
        var selectedLanguage = localStorage.getItem("selectedLanguage");
        if (selectedLanguage) {
            languageSelect.value = selectedLanguage;
            /* Shows / hides language content based on stored selection */
            if (selectedLanguage === 'english') {
                englishDiv.style.display = 'block';
                greekDiv.style.display = 'none';
            } else if (selectedLanguage === 'greek') {
                englishDiv.style.display = 'none';
                greekDiv.style.display = 'block';
            }
        }
    }

    /* Sets the selected language on page load */
    setSelectedLanguage();

});