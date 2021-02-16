const btn = document.querySelector(".toggle-container"),
      container = document.querySelector(".container");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  container.classList.toggle("open");
});

const anchors = document.querySelectorAll('a.nav-item');
for (let anchor of anchors) {
   anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}