/* =============== Imports =============== */
import { closeMenu, toggleMenu } from "./components/header.js";
import { initializeTheme, toggleTheme } from './components/theme.js';


/* =============== Header & Theme =============== */
const hamburgerElement = document.getElementById('hamburger');
const overlayElement = document.getElementById('overlay');
const themeToggleElement = document.getElementById('themeToggle');
const mobileThemeToggleElement = document.getElementById('mobileThemeToggle');

// Hamburger Menu
document.addEventListener('DOMContentLoaded', initializeTheme);
hamburgerElement.addEventListener('click', toggleMenu);
overlayElement.addEventListener('click', closeMenu);

// Theme
themeToggleElement.addEventListener('click', toggleTheme);
mobileThemeToggleElement.addEventListener('click', toggleTheme);