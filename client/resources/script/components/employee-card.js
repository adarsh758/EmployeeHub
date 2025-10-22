import sanitizeInput from '../validation/sanitization.js';

const cardNameElement = document.getElementById('cardName');
const cardDeptElement = document.getElementById('cardDept');

/**
 * Sanitizes input and updates the text content of a target element.
 *
 * @param {HTMLElement} displayElement - The element where the sanitized text will be displayed.
 * @param {string} fallbackText - The default text to show if the input is empty or invalid.
 * @param {string} inputValue - The current value of the input field to sanitize.
 */
function updateDisplayText(displayElement, fallbackText, inputValue) {
  const inputElement = displayElement;
  const sanitized = sanitizeInput(inputValue);
  inputElement.textContent = sanitized || fallbackText;
}

/**
 * Handles the input event for the name field and updates the card display.
 * Uses `this.value` because it is bound to the input element in the event listener.
 */
function updateName() {
  updateDisplayText(cardNameElement, 'Employee Name', this.value);
}

/**
 * Handles the input event for the department field and updates the card display.
 * Uses `this.value` because it is bound to the input element in the event listener.
 */
function updateDepartment() {
  updateDisplayText(cardDeptElement, 'Department', this.value);
}

export { updateName, updateDepartment };
