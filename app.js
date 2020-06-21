const form = document.querySelector('#create-meme-form');
const imageUrlField = document.querySelector('#image-link');
const topTextField = document.querySelector('#top-text');
const bottomTextField = document.querySelector('#bottom-text');
const generatedMemesDiv = document.querySelector('#generated-memes')

form.onsubmit = function(event) {
  event.preventDefault();
  const imageUrl = imageUrlField.value;
  const topText = topTextField.value;
  const bottomText = bottomTextField.value;

  createSpicyMeme(imageUrl);

  imageUrlField.value = '';
  topTextField.value = '';
  bottomTextField.value = '';
}

function createSpicyMeme(url, topText, bottomText) {
  const meme = document.createElement('div');
  meme.className = 'meme';
  meme.style.backgroundImage = `url(${url})`
  generatedMemesDiv.append(meme);
}