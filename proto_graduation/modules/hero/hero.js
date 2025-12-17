// Smooth scroll to exact element
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if(targetSection) {
                const headerOffset = 70; // navbar height
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.header__nav');
            if(navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});