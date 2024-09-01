new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breaks
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        },
        1366: {
            slidesPerView: 3
      },
    }
  });