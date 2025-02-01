document.addEventListener('DOMContentLoaded', function() {
    const arrows = document.querySelectorAll('.arrows-container__arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    });
});