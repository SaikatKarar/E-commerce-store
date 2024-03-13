/**
 * #PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", () => {
    preloader.classList.add("remove");
});

/**
 * #SIDEBAR
 */
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
function showSidebar() {
    sidebar.style.right = 0;
}
function closeSidebar() {
    sidebar.style.right = '-150%';
}