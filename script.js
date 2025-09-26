document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const btn = section.querySelector('.toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      const isOpen = section.classList.contains('active');

      sections.forEach(s => {
        s.classList.remove('active');
        const otherBtn = s.querySelector('.toggle-btn');
        if (otherBtn) otherBtn.textContent = 'Open';
      });

      if (!isOpen) {
        section.classList.add('active');
        btn.textContent = 'Close';
      } else {
        btn.textContent = 'Open';
      }
    });
  });
});
