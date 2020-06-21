const form = document.querySelector('#create-meme-form');
const imageUrlField = document.querySelector('#image-link');
const topTextField = document.querySelector('#top-text');
const bottomTextField = document.querySelector('#bottom-text');
const generatedMemesDiv = document.querySelector('#generated-memes');

form.onsubmit = function (event) {
  event.preventDefault();
  const imageUrl = imageUrlField.value;
  const topText = topTextField.value;
  const bottomText = bottomTextField.value;

  createSpicyMeme(imageUrl, topText, bottomText);

  imageUrlField.value = '';
  topTextField.value = '';
  bottomTextField.value = '';
};

function createSpicyMeme(url, topText, bottomText) {
  const meme = document.createElement('div');
  const topTextArea = document.createElement('span');
  const bottomTextArea = document.createElement('span');
  const deleteButton = document.createElement('button')

  meme.className = 'meme';
  meme.style.backgroundImage = `url(${url})`;
  topTextArea.className = 'top-text';
  topTextArea.innerText = topText;
  bottomTextArea.className = 'bottom-text';
  bottomTextArea.innerText = bottomText;
  deleteButton.classList = 'btn btn-danger';
  deleteButton.innerText = 'Delete Meme';

  meme.append(topTextArea, bottomTextArea)
  generatedMemesDiv.append(meme, deleteButton);
}
