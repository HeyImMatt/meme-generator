const form = document.querySelector('#create-meme-form');
const imageUrlField = document.querySelector('#image-link');
const topTextField = document.querySelector('#top-text');
const bottomTextField = document.querySelector('#bottom-text');

form.onsubmit = function(event) {
  event.preventDefault();
  const imageUrl = imageUrlField.value;
  const topText = topTextField.value;
  const bottomText = bottomTextField.value;
  console.log(imageUrl, topText, bottomText)
  imageUrlField.value = '';
  topTextField.value = '';
  bottomTextField.value = '';
}