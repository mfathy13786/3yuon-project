document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the animation class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Interaction logic for nodes
    const nodes = document.querySelectorAll('.diagram-node');
    nodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            node.style.boxShadow = '0 0 25px rgba(245, 158, 11, 0.2)';
        });
        node.addEventListener('mouseleave', () => {
            node.style.boxShadow = '';
        });
    });

    // Sticky Nav Shrink Effect
    const nav = document.querySelector('.company-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }
});
