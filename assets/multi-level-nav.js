const openNav = () => {
  document.querySelector(".multi-level-nav .ml-menu label.menu-toggle").click();
  document.querySelector(".multi-level-nav").classList.add("active");
}

const closeNav = () => {
  document.querySelector(".multi-level-nav").classList.remove("active");
}

document.addEventListener('DOMContentLoaded', (e) => {
  const navMenuCheckboxes = document.querySelectorAll('.menu-checkbox');

  navMenuCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      let currentMenu = event.currentTarget.parentNode.querySelector(".ml-menu");
      let multinavHeader = document.querySelector(".multinav-header");

      if (event.currentTarget.checked) {
        document.querySelectorAll(".ml-menu").forEach(m => {
          m.scrollTo(0, 0);
          m.setAttribute('style', 'overflow-y: hidden;');
        });
        
        currentMenu.setAttribute('style', 'overflow-y: auto;');
        currentMenu.append(multinavHeader);
      } else {
        currentMenu.setAttribute('style', 'overflow-y: hidden;');
        
        if(event.currentTarget.id != "ml-menu") {
          let parentMenu = event.currentTarget.parentNode.parentNode.parentNode;
          parentMenu.setAttribute('style', 'overflow-y: auto;');
          parentMenu.append(multinavHeader);
        }
      }
    });
  });
});
