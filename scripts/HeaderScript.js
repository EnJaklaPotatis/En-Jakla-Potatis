function fitTextToWidth(element) {
    let parentWidth = element.parentElement.offsetWidth;
    let fontSize = 100; // Start high
    element.style.fontSize = fontSize + "px";

    // Reduce font size until it fits
    while (element.scrollWidth > parentWidth && fontSize > 0) {
        fontSize--;
        element.style.fontSize = fontSize + "px";
    }
}

// Call on load and on resize
const title = document.querySelector(".HeaderScaler");
fitTextToWidth(title);
window.addEventListener('resize', () => fitTextToWidth(title));