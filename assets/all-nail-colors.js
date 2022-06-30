var topPosition = 0;
var filterSidebarHeight = 0;
var collectionRightWidth = 0;

document.addEventListener('DOMContentLoaded', function() {
  topPosition = getHeaderHeight();
  filterSidebarHeight = document.querySelector(".left_sidebar .category-nav").offsetHeight;
  collectionRightWidth = document.querySelector(".collection-right").offsetWidth;

  initLeftSidebar();
  
  var endlessScroll = new Ajaxinate({
    container: '#AjaxinateLoop',
    pagination: '#AjaxinatePagination',
    loadingText: 'Loading...'
  });
});

const initLeftSidebar = () => {
  var sidebarCatBtns = document.getElementsByClassName("productgrid--sidebar-button");

  for (var i = 0; i < sidebarCatBtns.length; i++) {
    sidebarCatBtns[i].addEventListener("click", function(e) {
      e.target.classList.toggle("active");

      let nextSibling = e.target.nextElementSibling;
      while(nextSibling) {
        var content = nextSibling;
        content.classList.toggle("hidden");

        nextSibling = nextSibling.nextElementSibling;
      }
    });
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    var categoryNav = document.querySelector(".left_sidebar .category-nav");
    categoryNav.style.minWidth = window.innerWidth - collectionRightWidth + "px";
    categoryNav.style.maxWidth = window.innerWidth - collectionRightWidth + "px";
  }
}

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

const closeFilterSlide = () => {
  document.querySelector(".left_sidebar").classList.remove("slide_open");
}

/** Filters in left sidebar */
window.onscroll = () => {
  if (window.matchMedia('(min-width: 768px)').matches) {
    /** desktop */
    floatingLeftSidebar()
  } else {
    /** mobile */
    floatingFilterOpenWrapper()
  }
};

/** --- desktop */
const floatingLeftSidebar = () => {
  var categoryNav = document.querySelector(".left_sidebar .category-nav");
  var absPosition = document.querySelector(".site-footer .page-width").offsetTop;

  if (window.pageYOffset > topPosition + filterSidebarHeight / 2 && window.pageYOffset < absPosition - filterSidebarHeight * 2) {
    categoryNav.style.position = "relative";
    categoryNav.style.marginTop = window.pageYOffset + "px";
    categoryNav.style.bottom = "unset"
  } 
  else if(window.pageYOffset > topPosition + filterSidebarHeight / 2 && window.pageYOffset >= absPosition - filterSidebarHeight * 2) {
    categoryNav.style.position = "absolute";
    categoryNav.style.bottom = "40px";
    categoryNav.style.marginTop = "auto";
  } 
  else {
    categoryNav.style.position = "relative";
    categoryNav.style.marginTop = "auto";
    categoryNav.style.bottom = "unset"
  }
}

/** --- mobile */
const floatingFilterOpenWrapper = () => {
  var filterOpenWrapper = document.querySelector(".open-catenav-wrapper");
  if (window.pageYOffset > topPosition) {
    if(topPosition > 0) {
      filterOpenWrapper.style.top = topPosition + "px";
    }
    filterOpenWrapper.classList.add("sticky");
  } else {
    filterOpenWrapper.classList.remove("sticky");
  }
}

const getHeaderHeight = () => {
  var headerHeight = 0;
  var announcementBar =  document.getElementById("announcement-bar-with-slider");
  var headerTop = document.querySelector(".header-top");
  
  console.log(" ------ announcementBar => ", announcementBar)
  console.log(" ------ headerTop => ", headerTop)

  if(announcementBar != null && headerTop != null) 
    headerHeight = announcementBar.offsetHeight + headerTop.offsetHeight - 1;
  else if(announcementBar == null) {
    getAnnouncementBar();
  }

  return headerHeight;
}

var intervalGetAnnouncementBarHeight;
const getAnnouncementBar = () => {
  intervalGetAnnouncementBarHeight = setInterval(timerGetAnnouncementBarHeight, 100);
}

const timerGetAnnouncementBarHeight = () => {
  var announcementBar =  document.getElementById("announcement-bar-with-slider");
  if(announcementBar != null) {
    topPosition = getHeaderHeight();
    stopGetAnnouncementBarHeight();
  }
}

const stopGetAnnouncementBarHeight = () => {
  clearInterval(intervalGetAnnouncementBarHeight);
}
