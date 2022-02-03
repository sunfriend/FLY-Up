const checkpoint = 2750;
const footerContent = document.querySelector("[data-footer-content]");
const footerIcons =document.querySelector("[data-footer-icons]");
const footerLinks = document.querySelector("[data-footer-links]");
const footerCp = document.querySelector("[data-footer-cp]");

window.addEventListener("scroll", checkScrolling);

export default function checkScrolling() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > checkpoint) {
        footerCp.style.opacity = 1;
        footerIcons.style.opacity = 1;
        footerLinks.style.opacity = 1;
    } else {
        footerCp.style.opacity = 0;
        footerIcons.style.opacity = 0;
        footerLinks.style.opacity = 0;
    }
}