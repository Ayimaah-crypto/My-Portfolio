// Declare a variable to store navbar element
const navElement = document.getElementById('navbar');
// detect a scroll event on document
document.addEventListener('scroll', function () {
    if(windows.scrollY > 70) {
        // change background to white
        navElement.style.backgroundColor = 'white';
    }
    else {
        // change background to transparent
        navElement.style.backgroundColor = 'transparent';

    }
});

// Function to create a dynamic typing effect

const professions = ["Web Developer","Content Writer"];
const typedText = document.getElementById("typed-text");

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentProfession = professions[professionIndex];
  const text = isDeleting
    ? currentProfession.substring(0, charIndex--)
    : currentProfession.substring(0, charIndex++);

  typedText.textContent = text;

  if (!isDeleting && charIndex === currentProfession.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    professionIndex = (professionIndex + 1) % professions.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);