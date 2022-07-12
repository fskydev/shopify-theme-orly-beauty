const openNav = () => {
  document.querySelector(".multi-level-nav .ml-menu label.menu-toggle").click();
  document.querySelector(".multi-level-nav").classList.add("active");
}

const closeNav = () => {
  document.querySelector(".multi-level-nav").classList.remove("active");
}
