// Efecto Typewriter (Máquina de escribir)
const phrases = [
  "Estudiante de Inteligencia Artificial",
  "Desarrollador Web Frontend",
  "Entusiasta de Ciberseguridad & Datos"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 1800; // Pausa al terminar la frase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Manejo del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const alertBox = document.getElementById("formAlert");
  alertBox.classList.remove("d-none");
  this.reset();
  setTimeout(() => alertBox.classList.add("d-none"), 4000);
});
/* Modales Cyberpunk */
.cyber-modal {
  background-color: #0d111a;
  color: var(--text-main);
  border: 1px solid var(--neon-cyan);
  box-shadow: 0 0 25px rgba(0, 243, 255, 0.3);
  border-radius: 0;
}
