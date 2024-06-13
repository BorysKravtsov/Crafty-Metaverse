export function initChapterItemHover() {
  const chapterItem2 = document.querySelector('.chapter__item2');
  const scrollLine = document.querySelector('.scroll-line');

  chapterItem2.addEventListener('mouseover', () => {
    scrollLine.classList.add('active');
  });

  chapterItem2.addEventListener('mouseout', () => {
    scrollLine.classList.remove('active');
  });
}
