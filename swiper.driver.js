var swiper = new Swiper(".built-with", {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 5,
    slideToClickedSlide: true,
    centeredSlides: true,
    speed:3500,
    longSwipes: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });

  /*
         responsive: [{
          breakpoint: 768,
          settings: {
              arrows: false,
              slidesToShow: 3
          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: false,
              slidesToShow: 1
          }
      }]
      */