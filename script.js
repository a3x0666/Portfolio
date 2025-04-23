// Add simple animation to sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(40px)';
  observer.observe(sec);
});
