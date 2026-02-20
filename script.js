
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        setTimeout(() => {
            section.style.transition = "opacity 1.5s ease-in-out";
            section.style.opacity = 1;
        }, 300 * index);
    });

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
