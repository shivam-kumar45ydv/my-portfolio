
console.log("Welcome to my portfolio website!");

const currentYear = new Date().getFullYear();

document.querySelector("footer p").textContent =
    `© ${currentYear} Shivam Kumar | All Rights Reserved`;

const words = [
    "CSE Student",
    "Web Developer",
    "Programmer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const element = document.getElementById("typing");

    if (!element) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    element.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }
});
