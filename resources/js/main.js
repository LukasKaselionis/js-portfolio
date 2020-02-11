// Navigation

function toggleNavigationMenu() {
    let nav = document.getElementById('nav');
    let menu = document.getElementById('menu-primary');
    let button = document.getElementById('toggle-button');
    button.onclick = function() {
        nav.classList.toggle('menu-hidden');
        menu.classList.toggle('menu-primary-hidden');
        button.classList.toggle('menu-button-toggle');
    }
}