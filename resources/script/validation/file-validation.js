// const fileInputElement = document.getElementById("profileImage");
const imagePreviewElement = document.getElementById('imagePreview');
const cardImageElement = document.getElementById('cardImage');

/**
 * Maximum allowed image size (in bytes). 5MB in this case.
 * @constant {number}
 */
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

/**
 * Displays an image preview by setting the `src` attribute and adding visibility classes.
 *
 * @param {HTMLImageElement} previewElement - The image element to display the preview in.
 * @param {string} imageSrc - The base64 or URL source of the image.
 */
function showImagePreview(previewElement, imageSrc) {
  const preEl = previewElement;
  preEl.src = imageSrc;
  preEl.classList.add('show');
}

/**
 * Creates a new profile <img> element.
 * @param {string} src - The image source URL.
 * @returns {HTMLImageElement} The created image element.
 */
function createProfileImage(src) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Profile';
  return img;
}

/**
 * Hides the placeholder element.
 * @param {HTMLElement} container - The card container element.
 */
function hidePlaceholder(container) {
  const placeholder = container.querySelector('span');
  if (placeholder) placeholder.style.display = 'none';
}

/**
 * Replaces an existing image or appends a new one.
 * @param {HTMLElement} container - The card container element.
 * @param {HTMLImageElement} newImage - The new image to insert.
 */
function replaceProfileImage(container, newImage) {
  const oldImage = container.querySelector('img');
  if (oldImage) oldImage.remove();
  container.appendChild(newImage);
}

/**
 * Updates the profile image in the employee card.
 * Responsible only for orchestrating the update process.
 *
 * @param {HTMLElement} container - The container where the image should be displayed.
 * @param {string} imageSrc - The new image source.
 */
function updateCardImage(container, imageSrc) {
  hidePlaceholder(container);
  const newImage = createProfileImage(imageSrc);
  replaceProfileImage(container, newImage);
}


/**
 * Validates whether the uploaded file is within the allowed size limit.
 *
 * @param {File} file - The uploaded image file.
 * @returns {boolean} True if the file size is valid; otherwise false.
 */
function isFileSizeValid(file) {
  return file.size <= MAX_IMAGE_SIZE;
}

/**
 * Handles the image upload process:
 * - Validates file size
 * - Reads image using FileReader
 * - Displays image previews in relevant elements
 *
 * @param {Event} event - The `change` event triggered by the file input.
 */
function handleImageUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!isFileSizeValid(file)) {
    alert('Image size must be less than 5MB');
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    const imageSrc = e.target.result;
    showImagePreview(imagePreviewElement, imageSrc);
    updateCardImage(cardImageElement, imageSrc);
  };
  reader.readAsDataURL(file);
}


export default handleImageUpload;
