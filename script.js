// nav bar + hamburger //
const hamburger = document.querySelector(".hamburger-click");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// ---------------------text anim----------------

const target = document.getElementById("target");

let array = ["WECODE"];

let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  letter.setAttribute("class","titleAnim");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
 

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();



// -----------------message formulaire------------------

const message =
"Merci de votre retour, l'équipe Raccoon vous répondra dans les meilleurs délais :)";

document

.getElementById("contactForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});

