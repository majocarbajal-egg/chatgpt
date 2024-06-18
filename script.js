document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('.form-container form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const phone = form.querySelector('input[name="phone"]').value;
        const datetime = form.querySelector('input[name="datetime"]').value;
        const people = form.querySelector('input[name="people"]').value;

        if (!name || !email || !phone || !datetime || !people) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        if (isNaN(people) || people <= 0) {
            alert("Por favor, ingrese un número válido de personas.");
            return;
        }

        // Simulate form submission (here you would typically send the data to the server)
        alert("Reserva enviada exitosamente!");
        form.reset();
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
