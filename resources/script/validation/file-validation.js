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
 * Inserts a profile image into a card container dynamically.
 *
 * @param {HTMLElement} container - The container element to insert the image into.
 * @param {string} imageSrc - The image source to be embedded.
 */
function updateCardImage(containerElement, imageSrc) {
  const container = containerElement;
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'Profile';
  container.appendChild(img);
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
