window.addEventListener("load", () => {

    // fade in body
    document.body.classList.add("loaded");

    // ensure clean state
    el.textContent = "";
    index = 0;
    isDeleting = false;

    // prevent double start
    if (!started) {
        started = true;
        setTimeout(startTyping, 300); // wait fade-in
    }
});