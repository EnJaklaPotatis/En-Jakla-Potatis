const params = new URLSearchParams(window.location.search);
const lang = params.get("lang") || "En_Strings";

fetch(`/String/${lang}.json`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("Language").textContent = data.title;
    })
    .catch(() => {
        document.getElementById("Language").textContent = "Translation error";
    });