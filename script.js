// Typing Animation for Home Section
const typedText = document.querySelector('.home-content h2');
const texts = ["Web Developer", "UI/UX Designer", "Open Source Enthusiast"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[index];
    if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex--);
    } else {
        typedText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
}
document.addEventListener('DOMContentLoaded', type);

// Smooth Scrolling for Nav Links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-show');
        }
    });
});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Form Validation (basic)
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert("Please fill in all fields before submitting.");
        }
    });
}
