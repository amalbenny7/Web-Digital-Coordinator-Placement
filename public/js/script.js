document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation menu visibility
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle visibility for each section
    const toggleButtons = document.querySelectorAll('.toggle-visibility');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = document.getElementById(this.dataset.target);
            section.style.display = section.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Adjust visibility toggle button appearance based on section visibility
    function adjustToggleButtonDisplay() {
        toggleButtons.forEach(button => {
            const section = document.getElementById(button.dataset.target);
            button.style.display = 'block'; // Show button if JS is enabled
            if (section.style.display === 'none') {
                button.textContent = 'Show ' + section.id.replace(/-/g, ' ');
            } else {
                button.textContent = 'Hide ' + section.id.replace(/-/g, ' ');
            }
        });
    }

    // Initial adjustment for toggle buttons
    adjustToggleButtonDisplay();

    // Listen for resize events to adjust layout if necessary
    window.addEventListener('resize', adjustToggleButtonDisplay);
});
