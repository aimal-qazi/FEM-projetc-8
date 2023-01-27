let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navList");

menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});

window.onscroll = () => {
  navbar.classList.remove("open");
};
