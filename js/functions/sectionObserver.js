export function initSectionObserver() {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.nav__link');

  if (sections.length === 0 || links.length === 0) {
    console.error('Не удалось найти секции или ссылки навигации');
    return;
  }

  const cb = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        links.forEach(link => link.classList.remove('active_nav'));

        const activeId = entry.target.id;
        const activeLink = document.querySelector(
          `.nav__link[href="#${activeId}"]`
        );

        if (activeLink) {
          activeLink.classList.add('active_nav');
          console.log('Активная ссылка найдена и добавлен класс:', activeLink);
        } else {
          console.warn('Не удалось найти активную ссылку для ID:', activeId);
        }
      }
    });
  };

  const sectionObserver = new IntersectionObserver(cb, {
    threshold: [0.5]
  });

  sections.forEach(sec => {
    sectionObserver.observe(sec);
    console.log('Добавлена секция для наблюдения:', sec);
  });

  console.log('Секции для наблюдения:', sections);
  console.log('Ссылки навигации:', links);
}
