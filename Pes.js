function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function changeLanguage() {

    var select = document.getElementById("languageSelect");
    // var greeting = document.getElementById("greeting");
    var Konami = document.getElementById("Konami");
    var ftb = document.getElementById("ftb");
    var Home = document.getElementById("Home");
    // var Dream = document.getElementsById("Dream");
    var Online = document.getElementById("Online");
    var VI = document.getElementById("VI");
    // var LS = documen.getElementById("LS");
    var DL = document.getElementById("DL");

    // Get the selected language code
    var selectedLanguage = select.value;

    // Update the greeting based on the selected language
    if (selectedLanguage === "en") {
        // greeting.innerText = "Hello!";
        Konami.innerText = "KONAMI";
        ftb.innerText = "EFOOTBALL";
        Home.innerText = "Home";
        Dream.innerText = "Dream Team";
        Online.innerText = "Online Support";
        VI.innerText = "Version Info";
        LS.innerText = "Licenes";
        DL.innerText = " Download";
    } else if (selectedLanguage === "jp") {
        // greeting.innerText = "Bonjour !";
        Konami.innerText = "コナミ ";
        ftb.innerText = "サッカー";
        Home.innerText = "家";
        Dream.innerText = "ドリームチーム";
        Online.innerText = "オンライン";
        VI.innerText = "バージョン情報";
        LS.innerText = "ライセンス";
        DL.innerText = "ダウンロード";

    } else if (selectedLanguage === "tl") {
        // greeting.innerText = "¡Hola!";
        Konami.innerText = "โคนามิ";
        ftb.innerText = "อีฟุตบอล";
        Home.innerText = "บ้าน";
        Dream.innerText = "ดรีมทีม"
        Online.innerText = "ออนไลน์";
        VI.innerText = "ข้อมูลเวอร์ชัน";
        LS.innerText = "ใบอนุญาต";
        DL.innerText = "ดาวน์โหลด";
    } else if (selectedLanguage === "zh") {
        // greeting.innerText = "Hallo!";
        Konami.innerText = "科樂美!";
        ftb.innerText = "E-足球";
        Home.innerText = "家";
        Dream.innerText = "夢幻隊";
        Online.innerText = "在線的";
        VI.innerText = "版本資訊";
        LS.innerText = "執照";
        DL.innerText = "下載";
    }
}
window.onscroll = function() { STmyFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function STmyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}