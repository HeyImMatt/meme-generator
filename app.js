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

  if (imageUrl.substring(0, 4) === 'http') {
    createSpicyMeme(imageUrl, topText, bottomText);
    imageUrlField.classList.remove('is-invalid');
    imageUrlField.value = '';
    topTextField.value = '';
    bottomTextField.value = '';
  } else {
    alert('URL does not appear to be valid');
    imageUrlField.classList.add('is-invalid');
  }
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

  window.scrollTo(0, document.body.scrollHeight);
}

generatedMemesDiv.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    if (confirm('That meme looks fire. Are you sure you want to delete it?')){
      event.target.previousSibling.remove();
      event.target.remove();
    }
  }
})