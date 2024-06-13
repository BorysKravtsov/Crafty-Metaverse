export function initMenuItems() {
  const menuItems = document.querySelectorAll('.header li');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
    });
  });
}
