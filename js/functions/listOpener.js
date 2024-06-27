export function initListOpener() {
  const icons = document.querySelectorAll('.faq__icon');

  icons.forEach(icon => {
    icon.addEventListener('click', function () {
      const listItem = icon.closest('.faq__list-item');
      let textContent = listItem.nextElementSibling;

      while (textContent && !textContent.classList.contains('faq__list-text')) {
        textContent = textContent.nextElementSibling;
      }

      if (textContent && textContent.classList.contains('faq__list-text')) {
        if (textContent.style.display === 'block') {
          textContent.style.display = 'none';
          icon.src = 'images/FAQ/plus-icon.svg';
        } else {
          textContent.style.display = 'block';
          icon.src = 'images/FAQ/minus-icon.svg';
        }
      } else {
        console.error('Element .faq__list-text not found.');
      }
    });
    7;
  });
}
