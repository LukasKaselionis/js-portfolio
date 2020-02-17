// Navigation

function toggleNavigationMenu() {
    let nav = document.getElementById('nav');
    let menu = document.getElementById('menu-primary');
    let button = document.getElementById('toggle-button');
    button.onclick = function() {
        nav.classList.toggle('menu-hidden');
        menu.classList.toggle('menu-primary-hidden')
        button.classList.toggle('menu-button-toggle');
    }
}

// Main-content

let li_elements = document.querySelectorAll(".menu ul li");
let item_elements = document.querySelectorAll(".content");
for (let i = 0; i < li_elements.length; i++) {
    li_elements[i].addEventListener("click", function() {
        let li_value = this.getAttribute("data-li");
        item_elements.forEach(function(item) {
            item.style.display = "none";
        });

        if (li_value == "about") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "project") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "technologies") {
            document.querySelector("." + li_value).style.display = "block";
        } else if (li_value == "contact") {
            document.querySelector("." + li_value).style.display = "block";
        } else {
            console.log("");
        }
    });
}

// Screen resize

screen();
window.addEventListener('resize', screen)

function screen() {
    let nav = document.getElementById('nav');
    let menu = document.getElementById('menu-primary');

    if (window.innerWidth < 768) {
        nav.classList.add('menu-hidden');
        menu.classList.add('menu-primary-hidden');
    } else {
        nav.classList.remove('menu-hidden');
        menu.classList.remove('menu-primary-hidden');
    }
}