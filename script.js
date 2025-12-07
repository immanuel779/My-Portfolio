const elements = document.querySelectorAll ('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
    const btn = document.querySelector(".whatsapp-float");
    if (window.scrollY > 100) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0.7";
    }
  });