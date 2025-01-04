
function display(activeDisplay, notDisplay) {
    const active = document.getElementById(activeDisplay);
    const reset = document.getElementById(notDisplay);
    // display
    active.style.display = 'flex';
    reset.style.display = 'none';
    
}

function btnVisited(btnActive, btnReset) {
    const visited = document.getElementById(btnActive);
    const notVisited = document.getElementById(btnReset);
    //change color
    visited.style.background = 'var(--accent)';
    notVisited.style.background = 'var(--header)';
}