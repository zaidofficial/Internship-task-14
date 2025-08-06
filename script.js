const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const darkToggle = document.getElementById('darkToggle');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// 🌙 Dark Mode Toggle Logic
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    document.querySelector('nav').classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('light-mode');

    document.querySelector('.mobile-menu').classList.toggle('dark-mode');
    document.querySelector('.mobile-menu').classList.toggle('light-mode');
});