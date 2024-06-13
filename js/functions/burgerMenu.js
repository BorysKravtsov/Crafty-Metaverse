export function initBurgerMenu() {
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.add('changed');
    document.querySelector('.menu__close').classList.add('changed');
    document.querySelector('.menu').classList.add('menu-active');
    document.body.classList.add('lock-scroll');
  });

  document.querySelector('.menu__close').addEventListener('click', function () {
    document.querySelector('.burger').classList.remove('changed');
    document.querySelector('.menu').classList.remove('menu-active');
    document.querySelector('.menu__close').classList.remove('changed');
    document.body.classList.remove('lock-scroll');
  });
}
