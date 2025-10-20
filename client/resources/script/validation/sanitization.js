/**
 * Sanitize the input for safe insertion into innerHTML.
 * Converts the value to a string and escapes HTML characters.
 *
 * @param {*} input  Value to sanitize (will be converted to string)
 * @returns {string} Escaped HTML-safe string (e.g. '<' => '&lt;')
 */
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = String(input);
  return div.innerHTML;
}

export default sanitizeInput;
