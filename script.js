document.addEventListener("DOMContentLoaded", function() {
    let currentSection = 0;
    const container = document.getElementById("container");
    const sections = document.querySelectorAll(".fullscreen-section");

    window.addEventListener("wheel", function(event) {
        event.preventDefault();

        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            currentSection++;
        } else if (event.deltaY < 0 && currentSection > 0) {
            currentSection--;
        }

        scrollToSection(currentSection);
    });

    function scrollToSection(index) {
        container.style.transform = `translateY(-${index * 100}%)`;
        currentSection = index;
    }
});
