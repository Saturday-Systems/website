// Simple hash-based navigation
document.addEventListener('DOMContentLoaded', () => {
    // Handle initial load
    showSection(window.location.hash || '#home');

    // Handle hash changes
    window.addEventListener('hashchange', () => {
        showSection(window.location.hash || '#home');
    });

    // Handle link clicks
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href');
            if (hash && hash !== '#') {
                e.preventDefault();
                window.location.hash = hash;
            }
        });
    });
});

function showSection(hash) {
    // Remove # and default to home
    const sectionId = hash.replace('#', '') || 'home';

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Update page title
        const titles = {
            'home': 'Saturday Systems | Work Less, Live More',
            'work': 'What We Do | Saturday Systems',
            'team': 'The Team | Saturday Systems',
            'contact': 'Contact Us | Saturday Systems'
        };
        document.title = titles[sectionId] || titles['home'];

        // Scroll to top
        window.scrollTo(0, 0);
    }
}
