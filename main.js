const headerScroll = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    headerScroll.classList.add("scrolled");
  } else {
    headerScroll.classList.remove("scrolled");
  }
});

const burgerBtn = document.querySelector(".header__burger");
const navBar = document.querySelector(".header__nav");
burgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    navBar.classList.remove("active");
  }
});
