const roles = [
    "Java Developer",
    "Android Engineer",
    "AI Enthusiast",
    "Cloud Architect",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
    document.getElementById("typing");

function type() {

    const text =
        roles[roleIndex];

    typingElement.textContent =
        text.substring(0, charIndex);

    charIndex++;

    if (charIndex > text.length) {

        setTimeout(() => {

            charIndex = 0;

            roleIndex =
                (roleIndex + 1) %
                roles.length;

        }, 1500);
    }

    setTimeout(type, 100);
}

type();

document
    .getElementById("theme-toggle")
    .addEventListener("click", () => {

        document.body
            .classList.toggle("dark");
    });

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting) {

                entry.target
                    .classList.add("active");
            }

        });

    });

document
    .querySelectorAll(".reveal")
    .forEach(el => observer.observe(el));