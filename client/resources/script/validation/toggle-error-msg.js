
/**
 * Displays or hides the error message for a specific field.
 *
 * @param {string} fieldName - The name of the field (used to locate the error element).
 * @param {string} [message=''] - The message to display. If empty, hides the error.
 */
function updateErrorMessage(fieldName, message = '') {
  const errorElement = document.getElementById(`${fieldName}Error`);
  if (!errorElement) return;

  if (message) {
    errorElement.textContent = message;
    errorElement.classList.add('form__error-message--show');
  } else {
    errorElement.textContent = '';
    errorElement.classList.remove('form__error-message--show');
  }
}

export default updateErrorMessage;