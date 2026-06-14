const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove("is-visible");
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  }
);

reveals.forEach((item) => observer.observe(item));

const setScrollVariable = () => {
  const scrollY = window.scrollY;
  document.documentElement.style.setProperty("--scroll", `${scrollY}`);
  document.documentElement.style.setProperty("--hero-shift", `${Math.min(scrollY * 0.18, 120)}px`);
};

setScrollVariable();
window.addEventListener("scroll", setScrollVariable, { passive: true });
