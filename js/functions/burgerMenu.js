export function initBurgerMenu() {
  const burgerButton = document.querySelector('.burger');
  const closeButton = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');
  const htmlElement = document.documentElement; // Находим элемент html

  if (burgerButton && closeButton && menu) {
    burgerButton.addEventListener('click', function () {
      burgerButton.classList.add('changed');
      closeButton.classList.add('changed');
      menu.classList.add('menu-active');
      htmlElement.classList.add('lock-scroll'); // Применяем класс к html
    });

    closeButton.addEventListener('click', function () {
      burgerButton.classList.remove('changed');
      closeButton.classList.remove('changed');
      menu.classList.remove('menu-active');
      htmlElement.classList.remove('lock-scroll'); // Удаляем класс у html
    });
  }
}
