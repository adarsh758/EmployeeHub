import {validateDate} from './date-validation.js';
import validateField from './error-msg.js';


// Decide which validation function to use
function runValidation(input) {
  if (input.type === 'date') {
    validateDate(input);
  } else {
    validateField(input);
  }
}

/** Handle blur event
 *
 * @param {event} event Event
 */
function handleBlur(event) {
  runValidation(event.target);
}

/** Handle input event (only if it already has validation classes)
 *
 * @param {event} event Event
 */
function handleInput(event) {
  const input = event.target;
  if (input.classList.contains('invalid') || input.classList.contains('valid')) {
    runValidation(input);
  }
}



export {handleBlur, handleInput};
