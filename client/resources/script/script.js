/* =============== Imports =============== */
import { closeMenu, toggleMenu } from './components/header.js';
import { initializeTheme, toggleTheme } from './components/theme.js';
import handleImageUpload from './validation/file-validation.js';
import { updateDepartment, updateFirstName, updateLastName } from './components/employee-card.js';
import { handleBlur, handleInput } from './validation/input-validation.js';
import {handleDateValidation} from './validation/date-validation.js';
import handleRadioChange from './validation/radio-validate.js';
import handleFormSubmit from './components/form.js';

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

/* =============== Form =============== */
const form = document.getElementById('employeeForm');
const textInputsElements = form.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="tel"], input[type="password"], textarea, select'
);
const dateInputsElements = form.querySelectorAll('input[type="date"]');
const genderRadiosElements = form.querySelectorAll('input[name="gender"]');

textInputsElements.forEach((input) => {
  input.addEventListener('blur', handleBlur);
  input.addEventListener('input', handleInput);
});

dateInputsElements.forEach((input) => {
  input.addEventListener('blur', handleDateValidation);
  input.addEventListener('change', handleDateValidation);
});

genderRadiosElements.forEach((radio) => {
  radio.addEventListener('change', handleRadioChange);
});

form.addEventListener("submit", handleFormSubmit);


/* =============== Employee Card =============== */
const fileInput = document.getElementById('profileImage');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const departmentInput = document.getElementById('department');

fileInput.addEventListener('change', handleImageUpload);

firstNameInput.addEventListener('input', updateFirstName);

lastNameInput.addEventListener('input', updateLastName);

departmentInput.addEventListener('change', updateDepartment);
