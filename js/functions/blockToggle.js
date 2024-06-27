export function initBlockToggle() {
  const blocks = document.querySelectorAll('.block');

  blocks.forEach(block => {
    const items = block.querySelectorAll('.block__list .item__list');
    const moreBtn = block.querySelector('.moreBtn');
    const arrowImg = moreBtn ? moreBtn.querySelector('.more-arrow') : null;

    if (items.length && moreBtn) {
      for (let i = 0; i < 3; i++) {
        if (items[i]) {
          items[i].classList.add('show');
        }
      }

      moreBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const isMore = moreBtn.textContent.includes('More');

        items.forEach((item, index) => {
          if (isMore) {
            item.classList.add('show');
          } else if (index >= 3) {
            item.classList.remove('show');
          }
        });

        if (isMore) {
          moreBtn.textContent = 'Hide ';
          if (arrowImg) {
            moreBtn.appendChild(arrowImg);
            arrowImg.classList.add('rotate-180');
          }
        } else {
          moreBtn.textContent = 'More ';
          if (arrowImg) {
            moreBtn.appendChild(arrowImg);
            arrowImg.classList.remove('rotate-180');
          }
        }
      });
    } else {
      console.error('Element .moreBtn or .item__list not found within .block.');
    }
  });
}
