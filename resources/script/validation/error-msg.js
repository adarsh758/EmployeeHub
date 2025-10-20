import validationRules from './form-validation-rules.js';
import updateErrorMessage from './toggle-error-msg.js';

/**
 * Applies or removes CSS classes on the given field to visually indicate validity.
 *
 * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} field - The field to update.
 * @param {boolean} isValid - Whether the field value is valid.
 */
function updateFieldValidityState(field, isValid) {
  field.classList.toggle('valid', isValid);
  field.classList.toggle('invalid', !isValid);
}

/**
 * Validates a single form field using predefined validation rules.
 *
 * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} field - The field element to validate.
 * @returns {boolean} Returns `true` if the field is valid, otherwise `false`.
 */
function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  const {required} = field;
  const rule = validationRules[fieldName];

  // Case 1: Field required but empty
  if (!value && required) {
    updateFieldValidityState(field, false);
    updateErrorMessage(fieldName, 'This field is required');
    return false;
  }

  // Case 2: Field has rule but does not match pattern
  if (rule && value && !rule.pattern.test(value)) {
    updateFieldValidityState(field, false);
    updateErrorMessage(fieldName, rule.message);
    return false;
  }

  // Case 3: Field valid
  updateFieldValidityState(field, true);
  updateErrorMessage(fieldName);
  return true;
}

export default validateField;
