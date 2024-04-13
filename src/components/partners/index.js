const swiper = new Swiper('.sliderPartners .swiper', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },			
  },	

  pagination: {
    el: '.sliderPartners .swiper-pagination',
    clickable: true,
  },
  
});