document.addEventListener("DOMContentLoaded", () => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(9, 10, 12, 0.98)';
            navbar.style.borderBottom = '1px solid rgba(212, 175, 55, 0.2)';
        } else {
            navbar.style.background = 'rgba(9, 10, 12, 0.9)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        }
    });

    // Initial trigger for elements already in viewport
    setTimeout(() => {
        const topElements = document.querySelectorAll('.hero .reveal');
        topElements.forEach(el => el.classList.add('active'));
    }, 100);
});
