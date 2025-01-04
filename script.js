
function display(activeDisplay, notDisplay) {
    const active = document.getElementById(activeDisplay);
    const reset = document.getElementById(notDisplay);
    // display
    active.style.display = 'flex';
    reset.style.display = 'none';
    // opacity
    active.style.opacity = '1';
    reset.style.opacity = '0';
}