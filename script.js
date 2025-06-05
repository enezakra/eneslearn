
function toggleWhy() {
    const why = document.getElementById("whyText");
    if (why.style.display === "block") {
        why.style.display = "none";
    } else {
        why.style.display = "block";
    }
}
function toggleSocial() {
    const social = document.getElementById("social-options");
    if (social.classList.contains("hidden")) {
        social.classList.remove("hidden");
    } else {
        social.classList.add("hidden");
    }
}
function setLanguage(lang) {
    if (lang === "en") {
        document.getElementById("welcome").innerText = "Welcome to EnesLearn";
        document.getElementById("tagline").innerText = "AI-powered English learning platform";
    } else {
        document.getElementById("welcome").innerText = "EnesLearn'e Hoş Geldiniz";
        document.getElementById("tagline").innerText = "Yapay zeka destekli İngilizce öğrenme platformu";
    }
}
