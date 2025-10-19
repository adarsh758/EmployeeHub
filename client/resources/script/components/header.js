const hamburgerElement = document.getElementById('hamburger');
const mobileNavElement = document.getElementById('mobileNav');
const overlayElement = document.getElementById('overlay');

/**
 * Toggle active Class on:
 * - hamburgerElement
 * - mobileNavElement
 * - OverlayElement 
 */
function toggleMenu() {
  hamburgerElement.classList.toggle('active');
  mobileNavElement.classList.toggle('active');
  overlayElement.classList.toggle('active');
}

/**
 * Remove active Class from:
 * - hamburgerElement
 * - mobileNavElement
 * - OverlayElement 
 */
function closeMenu() {
  hamburgerElement.classList.remove('active');
  mobileNavElement.classList.remove('active');
  overlayElement.classList.remove('active');
}




export {toggleMenu, closeMenu};