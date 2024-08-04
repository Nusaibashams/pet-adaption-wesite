        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav ul');

        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('showing');
            menuToggle.classList.toggle('active');
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
