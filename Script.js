const params = new URLSearchParams(window.location.search);
const lang = params.get("lang") || "en";

fetch(`/lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("Language").textContent = data.Language;
    })
    .catch(() => {
        document.getElementById("Language").textContent = "Translation error";
    });