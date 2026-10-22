document.addEventListener("DOMContentLoaded", () => {
    const badge = document.getElementById("spotifyBadge");

    if (!badge) {
        console.error("Spotify badge image not found!");
        return;
    }

    const baseUrl =
        "https://spotifystats.com/badge/ec453cddd94cdba470bdb8b71dbe9d609040a69b.svg";

    function refreshBadge() {
        badge.src = baseUrl + "?t=" + Date.now();
    }

    refreshBadge();
    setInterval(refreshBadge, 60000);
});
