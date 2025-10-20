/**
 * Updates the CSS classes of a field to visually represent its validity state.
 *
 * @param {HTMLInputElement} field - The date input field to update.
 * @param {boolean} isValid - Whether the field value is valid.
 */
function updateFieldValidityState(field, isValid) {
  field.classList.toggle('valid', isValid);
  field.classList.toggle('invalid', !isValid);
}

/**
 * Displays or hides an error message for a specific field.
 *
 * @param {string} fieldName - The name attribute of the field.
 * @param {string} [message=''] - The message to display; hides the message if empty.
 */
function updateErrorMessage(fieldName, message = '') {
  const errorElement = document.getElementById(`${fieldName}Error`);
  if (!errorElement) return;

  if (message) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  } else {
    errorElement.textContent = '';
    errorElement.classList.remove('show');
  }
}

/**
 * Validates the "Date of Birth" field to ensure the age is between 18 and 100 years.
 *
 * @param {Date} dob - The date of birth value as a Date object.
 * @returns {boolean} True if DOB is within the valid age range; otherwise false.
 */
function isValidDateOfBirth(dob) {
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  // Adjust for month/day differences to get accurate age
  const accurateAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

  return accurateAge >= 18 && accurateAge <= 100;
}

/**
 * Validates the "Date of Joining" field to ensure it's not in the future.
 *
 * @param {Date} doj - The date of joining value as a Date object.
 * @returns {boolean} True if DOJ is not in the future; otherwise false.
 */
function isValidDateOfJoining(doj) {
  const today = new Date();
  return doj <= today;
}

/**
 * Validates a date input field (such as DOB or DOJ) based on its ID and constraints.
 *
 * @param {HTMLInputElement} field - The date input field element.
 * @returns {boolean} True if the field passes validation; otherwise false.
 *
 */
function validateDate(field) {
  const { value, name: fieldName, required, id } = field;

  // Case 1: Required field but empty
  if (!value && required) {
    updateFieldValidityState(field, false);
    updateErrorMessage(fieldName, 'This field is required');
    return false;
  }

  const dateValue = new Date(value);

  // Case 2: Date of Birth validation
  if (id === 'dob' && !isValidDateOfBirth(dateValue)) {
    updateFieldValidityState(field, false);
    updateErrorMessage(fieldName, 'Employee must be 18–100 years old');
    return false;
  }

  // Case 3: Date of Joining validation
  if (id === 'doj' && !isValidDateOfJoining(dateValue)) {
    updateFieldValidityState(field, false);
    updateErrorMessage(fieldName, 'Date of joining cannot be in the future');
    return false;
  }

  // Case 4: Valid date
  updateFieldValidityState(field, true);
  updateErrorMessage(fieldName);
  return true;
}

/**
 * Validates a date input field (e.g., DOB or DOJ).
 *
 * @param {Event} event - The event triggered on the date input (e.g., blur or change).
 */
function handleDateValidation(event) {
  validateDate(event.target);
}

export  {validateDate, handleDateValidation};
