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
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.querySelector(".skill-card-inner").classList.toggle("flipped");
    });
});