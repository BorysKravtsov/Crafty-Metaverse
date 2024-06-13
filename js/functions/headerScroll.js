export function initHeaderScroll() {
  window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
