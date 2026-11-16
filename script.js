// Simple mobile menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('active');
});

// Smooth fade-in on scroll (light enhancement)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(20px)';
  sec.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(sec);
});