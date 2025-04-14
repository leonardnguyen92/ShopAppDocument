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

/* Reponse on mobile*/
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById("hamburger");
//   const nav = document.getElementById("nav");
//   const navLinks = nav.querySelectorAll("a");

  // Toggle menu visibility on mobile
  // hamburger.addEventListener("click", () => {
  //   nav.classList.toggle("show");
  //   hamburger.classList.toggle("active");
  // });

  // Close menu when a nav link is clicked (on mobile)
  // navLinks.forEach(link => {
  //   link.addEventListener("click", () => {
  //     if (window.innerWidth <= 768) {
  //       nav.classList.remove("show");
  //       hamburger.classList.remove("active");
  //     }
  //   });
  // });

  // Optional: Hide menu on window resize
//   window.addEventListener("resize", () => {
//     if (window.innerWidth > 768) {
//       nav.classList.remove("show");
//       hamburger.classList.remove("active");
//     }
//   });
// });