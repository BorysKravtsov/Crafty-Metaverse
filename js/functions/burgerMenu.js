export function initBurgerMenu() {
  const burgerButton = document.querySelector('.burger');
  const closeButton = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');

  if (burgerButton && closeButton && menu) {
    burgerButton.addEventListener('click', function () {
      burgerButton.classList.add('changed');
      closeButton.classList.add('changed');
      menu.classList.add('menu-active');
      document.body.classList.add('lock-scroll');
    });

    closeButton.addEventListener('click', function () {
      burgerButton.classList.remove('changed');
      closeButton.classList.remove('changed');
      menu.classList.remove('menu-active');
      document.body.classList.remove('lock-scroll');
    });
  }
}
