// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Cookie Consent
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-modal').style.display = 'block';
    }

    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookie-modal').style.display = 'none';
    });

    // Accessibility
    const accessBtn = document.getElementById('accessibility-btn');
    let largeFont = false;
    let highContrast = false;

    accessBtn.addEventListener('click', function() {
        largeFont = !largeFont;
        highContrast = !highContrast;
        document.body.classList.toggle('large-font', largeFont);
        document.body.classList.toggle('high-contrast', highContrast);
    });
});