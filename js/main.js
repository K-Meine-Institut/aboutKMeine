document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const currentUrl = window.location.href.split('#')[0];

    navLinks.forEach(link => {
        // Vergleiche die href-URL ohne Hash und ohne Trailing-Slash
        let linkUrl = link.href.split('#')[0].replace(/\/$/, '').replace("/index.html", "");
        let pageUrl = currentUrl.replace(/\/$/, '').replace("/index.html", "");

        //debug
        console.log('Link URL:', linkUrl);
        console.log('Page URL:', pageUrl);

        if (linkUrl === pageUrl) {
            link.classList.add('active');
        }
    });
});