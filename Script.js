function setLanguage(lang) {
    document.cookie = "lang=" + lang + "; path=/; max-age=31536000"; // 1 år
    location.reload();
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const lang = params.get("lang") || "en";

fetch(`/lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("Language").textContent = data.Language;
    })
    .catch(() => {
        document.getElementById("Language").textContent = "Translation error";
    });