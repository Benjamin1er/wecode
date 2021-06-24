// nav bar + hamburger //
const hamburger = document.querySelector(".hamburger-click");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const message =
  "Merci de votre retour, l'équipe Raccoon vous répondra dans les meilleurs délais :)";

document
  .getElementById("contactFo1rm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
