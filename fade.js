window.addEventListener("load", (event) => {
  let options = {
    rootMargin: "0px",
    threshold: 0.8
  };

  const intersectionHandler = function(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
        entry.target.classList.remove("fadeOut");
        entry.target.classList.add("fadeIn");
      } else {
        entry.target.classList.remove("fadeIn");
        entry.target.classList.add("fadeOut");
      }
    });
  };

  let observer = new IntersectionObserver(intersectionHandler, options);
  document.querySelectorAll(".section").forEach((row, index) => {
    observer.observe(row);
  });
});