 // Change navbar style on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Add hover effect to navigation links
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#64b5f6';
                this.style.color = '#333';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'transparent';
                this.style.color = '#fff';
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });