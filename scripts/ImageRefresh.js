const badge = document.getElementById("spotifyBadge");
const imageUrl = badge.src;

function refreshBadge() {
    badge.src = imageUrl + "?t=" + Date.now();
}

refreshBadge();
setInterval(refreshBadge, 60000);