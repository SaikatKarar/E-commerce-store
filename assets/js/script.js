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



// function swiperAnimation() {
//     let swiper = new Swiper(".mySwiper", {
//         slidesPerView: "auto",
//         spaceBetween: 30,
//         loop: true,
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
//     });
// }
// swiperAnimation()