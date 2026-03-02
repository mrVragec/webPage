// Smooth scrolling for anchor links
(function() {
    'use strict';

    // Smooth scroll for links with .scrolly class
    const scrollyLinks = document.querySelectorAll('a.scrolly');
    
    scrollyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const targetPosition = target.offsetTop;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });



})();
