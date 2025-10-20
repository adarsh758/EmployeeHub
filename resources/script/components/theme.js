import { createSunIconElement, createMoonIconElement } from '../utils/icons.js';

const { body } = document;
const themeSvgElement = document.getElementById('themeIcon');
const mobileThemeSvgElement = document.getElementById('mobileThemeIcon');

/**
 * Get the current theme from the body element.
 *
 * @returns {string} The current theme ('light' or 'dark')
 */
function getCurrentTheme() {
  return body.getAttribute('data-theme') || 'light';
}

/**
 * Toggle the current theme and update the body attribute.
 *
 * @returns {void}
 */
function setCurrentTheme() {
  const currentTheme = getCurrentTheme();

  if (currentTheme !== 'light' && currentTheme !== 'dark') {
    body.setAttribute('data-theme', 'light');
    return;
  }

  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
}

/**
 * Update a container element with a given icon, replacing any existing children.
 *
 * @param {HTMLElement} container - The container to update.
 * @param {SVGElement} icon - The SVG icon element to append.
 */
function updateThemeIcon(container, icon) {
  if (!container) return;
  while (container.firstChild) container.removeChild(container.firstChild);
  container.appendChild(icon);
}

/**
 * Toggle the theme icon based on the current theme.
 * Updates both desktop and mobile toggle elements.
 */
function toggleThemeIcon() {
  const theme = getCurrentTheme();
  const icon = theme === 'light' ? createSunIconElement() : createMoonIconElement();

  if (themeSvgElement) updateThemeIcon(themeSvgElement, icon.cloneNode(true));
  if (mobileThemeSvgElement) updateThemeIcon(mobileThemeSvgElement, icon.cloneNode(true));
}

/**
 * Toggle the theme:
 * - Switch between light and dark theme
 * - Update the theme icons accordingly
 */
function toggleTheme() {
  setCurrentTheme();
  toggleThemeIcon();
}

/**
 * Initialize the theme on page load.
 * Sets the theme on body and updates the icons.
 *
 * Can be called from script.js on page load.
 */
function initializeTheme() {
  const theme = getCurrentTheme();
  body.setAttribute('data-theme', theme);
  toggleThemeIcon();
}

export { toggleTheme, initializeTheme };
