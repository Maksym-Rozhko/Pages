document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        slidesPerView: 2,
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
});