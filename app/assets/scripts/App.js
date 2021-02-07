/* Import styles.css */
import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import StopTransitions from './modules/StopTransitions'

/* Live js changes in the browser */
if (module.hot) {
  module.hot.accept()
}

// Create mobileMenu object
let mobileMenu = new MobileMenu();


/* Lesson example code below this line */
// alert('The sky is