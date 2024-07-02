export function initSectionObserver() {
  const sections = document.querySelectorAll('.observed-section');
  const navItems = document.querySelectorAll('nav ul li');

  const options = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver(entries => {
    let anySectionIntersecting = false;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anySectionIntersecting = true;
        navItems.forEach(item => {
          item.classList.remove('active');
        });

        navItems.forEach(item => {
          const sectionId = item
            .querySelector('a')
            .getAttribute('href')
            .substring(1);
          if (sectionId === entry.target.id) {
            item.classList.add('active');
          }
        });
      }
    });

    if (!anySectionIntersecting) {
      navItems.forEach(item => item.classList.remove('active'));
    }
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
}
