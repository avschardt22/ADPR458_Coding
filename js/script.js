const toggleBtn = document.getElementById("toggle-button");
const navListItems = document.getElementById("nav-menu-list");

toggleBtn.addEventListener("click", function () {
  navListItems.classList.toggle("active");
});