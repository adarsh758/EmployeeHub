
/**
 * Handles change event for radio button groups (like gender) by clearing the error message.
 *
 * @param {Event} event - The change event from the radio input.
 */
function handleRadioChange() {
  const errorElement = document.getElementById('genderError');
  if (errorElement) {
    errorElement.classList.remove('show');
  }
}

export default handleRadioChange;

