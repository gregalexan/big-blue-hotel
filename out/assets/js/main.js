/* This is the Main JavaScript file of the Website */

/* Toggles the Menu (Mobile Menu - Main Menu). */
function toggleMenu() {
    /* Targets the hamburger-button */
    const hamburgerButton = document.querySelector('.hamburger-button');
    /* Targets the mobile-menu */
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
}
/* Content Loaded */
document.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
});
