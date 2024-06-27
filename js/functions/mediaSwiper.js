export function initMediaSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  });
}
