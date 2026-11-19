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
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

contactForm.addEventListener("submit", async function(event) {
  event.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');

  submitButton.disabled = true;
  formStatus.textContent = "Sending your message...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      formStatus.textContent =
        "✓ Thank you! Your message has been sent successfully.";
      contactForm.reset();
    } else {
      formStatus.textContent =
        "Sorry, your message could not be sent. Please try again.";
    }
  } catch (error) {
    formStatus.textContent =
      "Connection error. Please try again.";
  } finally {
    submitButton.disabled = false;
  }
});