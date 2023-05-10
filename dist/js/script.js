const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
const blurr = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  blurr.classList.toggle("open");
});

const links = document.querySelectorAll(".links__drop__item h4");
links.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

// const header = document.querySelector(".header");
// const branding = document.querySelector(".branding img");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 100) {
//     header.classList.add("blue");
//   branding.style="background:red;";
//   } else {
//     header.classList.remove("blue");
//   }
// });

