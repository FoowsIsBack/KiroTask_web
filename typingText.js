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
        index = 0;
        setTimeout(typeAgain, 300);
    }
}

function typeAgain() {
    if (index < text.length) {
        el.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeAgain, 100);
    } else {
        index = text.length;
        setTimeout(loop, 2000);
    }
}

loop();