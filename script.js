document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const btn = section.querySelector('.toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', function (event) {
      event.stopPropagation();
      const isOpen = section.classList.contains('active');

      // Close other sections and reset their buttons
      sections.forEach(s => {
        s.classList.remove('active');
        const otherBtn = s.querySelector('.toggle-btn');
        if (otherBtn) otherBtn.textContent = 'Open';
      });

      // Toggle current section and update text
      if (!isOpen) {
        section.classList.add('active');
        btn.textContent = 'Close';
      } else {
        btn.textContent = 'Open';
      }
    });
  });
});
