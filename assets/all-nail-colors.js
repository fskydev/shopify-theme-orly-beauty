// document.addEventListener('DOMContentLoaded', function() {
//   initFilterItems();
// }, false);

// const initFilterItems = () => {

// }

const toggleFilterItems = (e) => {
  var seeMoreWrapper = e.target.parentNode;
  var filterItems = seeMoreWrapper.parentNode.querySelectorAll("ul li.filter-item");
  
  seeMoreWrapper.classList.toggle("filter-item--toggle-more");
  seeMoreWrapper.classList.toggle("filter-item--toggle-less");
  
  if(seeMoreWrapper.classList.contains("filter-item--toggle-more")) {
    seeMoreWrapper.querySelector("a").innerText = "See more";
  } else {
    seeMoreWrapper.querySelector("a").innerText = "See less";
  }

  filterItems.forEach((element, i) => {
    if(i > 4) {
      element.classList.toggle("filter-item--hidden");
    }
  });
}
