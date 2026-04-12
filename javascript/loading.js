window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    el.textContent = "";
    index = 0;
    isDeleting = false;

    if (!started) {
        started = true;
        setTimeout(startTyping, 300);
    }
});