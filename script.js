// Función para el desplazamiento suave
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop
        });
    }
}

// Manejadores de eventos para los enlaces de navegación
document.getElementById('about-link').addEventListener('click', () => {
    scrollToElement('about');
});

document.getElementById('portfolio-link').addEventListener('click', () => {
    scrollToElement('portfolio');
});

document.getElementById('contact-link').addEventListener('click', () => {
    scrollToElement('contact');
});
