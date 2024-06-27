export function initSectionObserver() {
  const sections = document.querySelectorAll('.observed-section');
  const navItems = document.querySelectorAll('nav ul li');

  const options = {
    threshold: 0.33
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      navItems.forEach(item => {
        if (
          item.querySelector('a').getAttribute('href').substring(1) ===
          entry.target.id
        ) {
          if (entry.isIntersecting) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        }
      });
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
}
