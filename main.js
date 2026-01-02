onload = () => {
  document.body.classList.remove("container");
};




const btn = document.getElementById("openMsg");
const msg = document.getElementById("messageBox");
const txt = document.getElementById("text");

/* Replace `.flowers` with the class or ID
   of your EXISTING flower background container */
const bg = document.querySelector(".flowers");

const texts = ['Show Message', 'Hide Message'];

let currentState = 0;
txt.innerHTML = "Show Message";

btn.addEventListener("click", () => {
    msg.classList.toggle("show");
    bg.classList.toggle("blur-background");
  if (currentState === 1) {
    txt.innerHTML = texts[0];
    currentState = 0;
  } else {
    txt.innerHTML = texts[1];
    currentState = 1;
  }
});





setInterval(() => {
  btn.style.animation = "none";
  btn.offsetHeight;
  btn.style.animation = "";
}, 6000);