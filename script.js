
function toggleWhy() {
    var x = document.getElementById("whyText");
    x.style.display = (x.style.display === "block") ? "none" : "block";
}

function setLanguage(lang) {
    if(lang === "en") {
        document.getElementById("welcome").innerText = "Welcome to EnesLearn";
        document.getElementById("tagline").innerText = "AI-powered English learning platform";
    } else {
        document.getElementById("welcome").innerText = "EnesLearn'e Hoş Geldiniz";
        document.getElementById("tagline").innerText = "Yapay zeka destekli İngilizce öğrenme platformu";
    }
}
