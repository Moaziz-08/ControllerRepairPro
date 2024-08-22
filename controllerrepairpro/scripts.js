document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Scroll effect for hero section
    window.addEventListener('scroll', function() {
        const heroContent = document.querySelector('.hero-content');
        let scrollPosition = window.scrollY;
        heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        heroContent.style.opacity = 1 - scrollPosition / 800;
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
