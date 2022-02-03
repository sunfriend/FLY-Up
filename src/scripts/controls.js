const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-list");
const navLink = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

navLink.forEach(n => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}

function mobileMenu() {
    console.log("clikcked");
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
}

export {closeMenu, mobileMenu};