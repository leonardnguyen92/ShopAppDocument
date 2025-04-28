/* */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain attribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

/* javascript for header */
document.addEventListener("DOMContentLoaded", function () {
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const mainNavbar = document.getElementById("mainNavbar");
  const dropdown = document.getElementById("hoverDropdown");
  const dropdownToggle = dropdown.querySelector("a");
  const allMenuItems = document.querySelectorAll(".menu-item, .sub-menu-item");

  // Toggle menu
  menuToggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      menuToggleBtn.classList.toggle("open");
      mainNavbar.classList.toggle("show");
  });

  // Toggle dropdown on mobile
  dropdownToggle.addEventListener("click", function (e) {
      const isMobile = window.innerWidth < 992;
      if (isMobile) {
          e.preventDefault();
          dropdown.classList.toggle("show");
      }
  });

  // Click vào bất kỳ menu item nào (trừ dropdown) => đóng menu
  allMenuItems.forEach(link => {
      link.addEventListener("click", function () {
          menuToggleBtn.classList.remove("open");
          mainNavbar.classList.remove("show");
          dropdown.classList.remove("show");
      });
  });

  // Click ngoài menu => đóng
  document.addEventListener("click", function (e) {
      const isInsideMenu = mainNavbar.contains(e.target);
      const isToggleBtn = menuToggleBtn.contains(e.target);
      const isDropdownToggle = dropdownToggle.contains(e.target);

      if (!isInsideMenu && !isToggleBtn && !isDropdownToggle) {
          menuToggleBtn.classList.remove("open");
          mainNavbar.classList.remove("show");
          dropdown.classList.remove("show");
      }
  });
});