var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".projects__pagination-fraction",
    type: "fraction",
  },
  navigation: {
    nextEl: ".projects__pagination-arrow_right",
    prevEl: ".projects__pagination-arrow_left",
  },
});