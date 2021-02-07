const classes = document.body.classList;
let timer = 0;

function StopTransitions() {
  if (timer) {
      clearTimeout(timer);
      timer = null;
  }
  else
      classes.add('preload');

  timer = setTimeout(() => {
      classes.remove('preload');
      timer = null;
  }, 100);
}

window.addEventListener("resize", StopTransitions);
window.addEventListener("load", StopTransitions);

export default StopTransitions;

/* // Selecting elements from DOM
const findBodyTag = document.querySelector("body");

// Functionality
function RemoveClassPreload() {
  findBodyTag.classList.remove("preload");
}

// Event handling
window.addEventListener("load", RemoveClassPreload);

export default RemoveClassPreload; */

/* Prevent transition on first load  */
/* https://css-tricks.com/transitions-only-after-page-load/ */
// window.addEventListener("resize", RemovePreload);
// window.addEventListener("load", function() {
//   document.querySelector("body").classList.remove("preload");
// });

// window.addEventListener("resize", function() {
//   document.querySelector("body").classList.add("preload");
//   document.querySelector("body").classList.toggle("preload");
// });

/* window.onload = function(){
  document.querySelector("body").classList.remove("preload");
} */