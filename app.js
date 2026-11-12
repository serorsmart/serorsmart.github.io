const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
 hamburger.addEventListener("click", function() {
     nav.classList.toggle("show");
});
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
  nav.classList.remove("show");
});
});