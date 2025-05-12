function fitTextToWidth(element) {
    const parent = element.parentElement;
    const parentStyle = getComputedStyle(parent);
    
    // Calculate effective parent width (excluding padding)
    const parentPaddingLeft = parseFloat(parentStyle.paddingLeft);
    const parentPaddingRight = parseFloat(parentStyle.paddingRight);
    const availableWidth = parent.offsetWidth - parentPaddingLeft - parentPaddingRight;

    let fontSize = 100; // Start high
    element.style.fontSize = fontSize + "px";

    // Reduce font size until it fits
    while (element.scrollWidth > availableWidth && fontSize > 0) {
        fontSize--;
        element.style.fontSize = fontSize + "px";
    }
}

// Call on load and on resize
const title = document.querySelector(".HeaderScaler");
fitTextToWidth(title);
window.addEventListener('resize', () => fitTextToWidth(title));