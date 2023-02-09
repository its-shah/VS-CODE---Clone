// Swiper JS File

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const navbar = document.querySelector(".navbar");

const mobileNav = document.querySelector(".mobile-nav");

mobileNav.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
