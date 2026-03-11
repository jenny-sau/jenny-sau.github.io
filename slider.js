document.addEventListener("DOMContentLoaded", () => {

  const projects = document.querySelectorAll(".project-bg");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  projects.forEach(project => {
    observer.observe(project);
  });

});
