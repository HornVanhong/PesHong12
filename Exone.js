function changeLanguage() {
    var select = document.getElementById("languageSelect");
    var greeting = document.getElementById("greeting");
    var titile = document.getElementById("title");

    // Get the selected language code
    var selectedLanguage = select.value;

    // Update the greeting based on the selected language
    if (selectedLanguage === "en") {
        titile.innerText = "Pes Efootball";
        greeting.innerText = "Hello!";
    } else if (selectedLanguage === "fr") {
        titile.innerText = "Pes Efootball";
        greeting.innerText = "Bonjour !";
    } else if (selectedLanguage === "es") {
        titile.innerText = "Pes Efutbol";
        greeting.innerText = "¡Hola!";
    } else if (selectedLanguage === "de") {
        titile.innerText = "Pes E-Football";
        greeting.innerText = "Hallo!";
    }
}