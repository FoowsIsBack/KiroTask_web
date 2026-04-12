const text = "KiroTask";
let index = text.length;
let isDeleting = false;

const el = document.getElementById("typingText");
el.textContent = text;

function loop() {
    if (!isDeleting) {
        setTimeout(() => {
            isDeleting = true;
            loop();
        }, 1000);
        return;
    }

    if (index >= 0 && isDeleting) {
        el.textContent = text.substring(0, index);
        index--;
        setTimeout(loop, 80);
    } else {
        isDeleting = false;
        index = 0; // ✅ reset to 0 before typing
        setTimeout(typeAgain, 300); // ✅ slight delay before retyping
    }
}

function typeAgain() {
    if (index < text.length) {
        el.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeAgain, 150);
    } else {
        index = text.length; // ✅ reset to full length before deleting again
        setTimeout(loop, 2000);
    }
}

loop();