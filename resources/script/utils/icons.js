// Path data for the Sun and Moon icons
const sunIconPath =
  'M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z';
const moonIconPath = 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z';

/**
 * Creates an SVG icon element from the provided path data.
 *
 * @param {string} pathData -
 * @param {string} [strokeColor='currentColor'] - (default is 'currentColor').
 * @param {number} [strokeWidth=2]
 * @param {string} [strokeLinecap='round'] - (default is 'round').
 * @param {string} [strokeLinejoin='round'] - (default is 'round').
 * @returns {SVGElement} The created SVG element.
 */
function createIcon(
  pathData,
  strokeColor = 'currentColor',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round'
) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  // Set the attributes for the path element
  path.setAttribute('d', pathData);
  path.setAttribute('stroke', strokeColor);
  path.setAttribute('stroke-width', strokeWidth);
  path.setAttribute('stroke-linecap', strokeLinecap);
  path.setAttribute('stroke-linejoin', strokeLinejoin);


  return path;
}

// Create the Sun and Moon icons
// const sunIcon = () => createIcon(sunIconPath);
// const moonIcon = () => createIcon(moonIconPath);

function createSunIconElement() {
  return createIcon(sunIconPath);
}
function createMoonIconElement() {
  return createIcon(moonIconPath);
}

export { createSunIconElement, createMoonIconElement };
