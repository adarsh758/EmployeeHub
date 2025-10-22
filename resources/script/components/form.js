/* eslint-disable no-console */
/* =============== Imports =============== */
import { validateDate } from '../validation/date-validation.js';
import validateField from '../validation/error-msg.js';
import sanitizeInput from '../validation/sanitization.js';
import updateErrorMessage from '../validation/toggle-error-msg.js';

/* =============== Elements =============== */
const form = document.getElementById('employeeForm');
const imagePreviewElement = document.getElementById('imagePreview');
const cardImageElement = document.getElementById('cardImage');
const cardNameElement = document.getElementById('cardName');
const cardDeptElement = document.getElementById('cardDept');
const textInputsElements = form.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea, select'
);

/**
 * Validates all form inputs (text, email, date, etc.) using appropriate validation functions.
 *
 * @param {NodeListOf<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>} inputs - All text-based form inputs.
 * @returns {boolean} True if all inputs are valid; otherwise, false.
 */
function validateAllInputs(inputs) {
  let allValid = true;

  inputs.forEach((input) => {
    const isDate = input.type === 'date';
    const valid = isDate ? validateDate(input) : validateField(input);
    if (!valid) allValid = false;
  });

  return allValid;
}

/**
 * Validates whether a gender radio option has been selected.
 *
 * @returns {boolean} True if a gender is selected; otherwise, false.
 */
function validateGender() {
  const genderSelected = form.querySelector('input[name="gender"]:checked');
  if (!genderSelected) {
    updateErrorMessage('gender', 'Please select a gender');
    return false;
  }
  return true;
}

/**
 * Resets the form UI state including inputs, image preview, and employee card display.
 */
function resetFormUI() {
  form.reset();
  imagePreviewElement.classList.remove('show');
  cardImageElement.innerHTML = '<span>👤</span>';
  cardNameElement.textContent = 'Employee Name';
  cardDeptElement.textContent = 'Department';

  textInputsElements.forEach((input) => {
    input.classList.remove('valid', 'invalid');
  });
}

/**
 * Handles the form submission: validates inputs, collects and sanitizes data,
 * shows success message, and resets the UI.
 *
 * @param {Event} event - The submit event object.
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const inputsValid = validateAllInputs(textInputsElements);
  const genderValid = validateGender();

  const isValid = inputsValid && genderValid;

  if (!isValid) {
    alert('Please fix all validation errors before submitting');
    return;
  }

  // Sanitize and collect form data
  const formData = new FormData(form);
  const data = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of formData.entries()) {
    data[key] = sanitizeInput(value);
  }

  
  console.log('Sanitized Form Data:', data);
  alert('Employee registered successfully! Check console for details.');

  resetFormUI();
}

// Attach named submit handler
export default handleFormSubmit;
