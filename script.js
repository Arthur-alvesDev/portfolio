// FRASES ANIMADAS
const phrases = [
    "Estudante de Informática",
    "Desenvolvedor em formação",
    "Explorando novas tecnologias",
    "Construindo ideias com código"
];

const typedText = document.getElementById("typedText");

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const phrase = phrases[phraseIndex];

    typedText.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex < phrase.length) {

        charIndex++;

        setTimeout(typeEffect, 75);

    } else if (!deleting) {

        deleting = true;

        setTimeout(typeEffect, 1500);

    } else if (charIndex > 0) {

        charIndex--;

        setTimeout(typeEffect, 35);

    } else {

        deleting = false;

        phraseIndex = (phraseIndex + 1) % phrases.length;

        setTimeout(typeEffect, 350);
    }
}

typeEffect();


// MENU PARA CELULAR

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// FECHAR MENU AO CLICAR EM UM LINK

nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("year").textContent =
    new Date().getFullYear();
