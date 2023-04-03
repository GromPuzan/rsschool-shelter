window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav");
    menuItem = document.querySelectorAll(".nav-list")
    hamb = document.querySelector(".nav-hamb");

    hamb.addEventListener("click", () => {
        hamb.classList.toggle("hamb_active");
        menu.classList.toggle("nav_active");
    });
    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
          hamb.classList.toggle("hamb_active");
          menu.classList.toggle("nav_active");
        });
      });


})