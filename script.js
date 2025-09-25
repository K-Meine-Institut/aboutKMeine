// script.js - Navigation und kleine Interaktionen

document.addEventListener('DOMContentLoaded', function() {
    // Navigation Highlight
    const navLinks = document.querySelectorAll('nav a');
    const current = location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if(link.getAttribute('href') === current || (link.getAttribute('href') === 'index.html' && current === '')) {
            link.classList.add('active');
        }
    });
});
