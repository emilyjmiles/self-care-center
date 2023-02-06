const affirmationButton = document.querySelector('.affirmation-message');
const mantraButton = document.querySelector('.mantra-message');
const receiveMessageButton = document.querySelector('.receive-button');
const clearMessageButton = document.querySelector('.clear-button');
const emptyFavButton = document.querySelector('.favorite-empty');
const selectedFavButton = document.querySelector('.favorite-selected');
const viewFavsButton = document.querySelector('.view-favorites');

const errorMessage = document.querySelector('.error-message');
const meditationIcon = document.querySelector('.mediation-guy');
const messageRecieved = document.querySelector('.received-message');

const favoritesList = [];

window.addEventListener('load', displayPageLoad);
receiveMessageButton.addEventListener('click', validateForm);
clearMessageButton.addEventListener('click', clearMessage);
emptyFavButton.addEventListener('click', addToFavorites);
selectedFavButton.addEventListener('click', removeFromFavorites);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showElements(elements) {
  elements.forEach(element => element.classList.remove('hidden'));
};

function hideElements(elements) {
  elements.forEach(element => element.classList.add('hidden'));
}

function displayPageLoad() {
  showElements([meditationIcon]);
  hideElements([messageRecieved, clearMessageButton, emptyFavButton, selectedFavButton]);
}

function getMessage(messages) {
  messageRecieved.innerHTML = messages[getRandomIndex(messages)];

  if (favoritesList.includes(messageRecieved.innerHTML)) {
    showElements([selectedFavButton]);
    hideElements([emptyFavButton]);
  } else {
    showElements([emptyFavButton]);
    hideElements([selectedFavButton]);
  }
}

function validateForm() {
  if (!affirmationButton.checked && !mantraButton.checked) {
    errorMessage.innerHTML = 'Please select on option before submitting';
  } else {
    errorMessage.innerHTML = '';
    displayMessage();
  }
}

function displayMessage() {
  if (affirmationButton.checked) {
    showElements([messageRecieved, clearMessageButton]);
    hideElements([meditationIcon]);
    getMessage(affirmations);
  } else if (mantraButton.checked) {
    showElements([messageRecieved, clearMessageButton]);
    hideElements([meditationIcon]);
    getMessage(mantras);
  }
}

function clearMessage() {
  messageRecieved.innerHTML = '';
  showElements([meditationIcon]);
  hideElements([messageRecieved, clearMessageButton, emptyFavButton, selectedFavButton]);
  displayViewFavsButton();

  if (affirmationButton.checked) {
    affirmationButton.checked = false;
  } else if (mantraButton.checked) {
    mantraButton.checked = false;
  }
}

function addToFavorites() {
  showElements([selectedFavButton, viewFavsButton]);
  hideElements([emptyFavButton]);

  if (!favoritesList.includes(messageRecieved.innerHTML)) {
    favoritesList.push(messageRecieved.innerHTML);
  }
}

function removeFromFavorites() {
  showElements([emptyFavButton]);
  hideElements([selectedFavButton]);
  displayViewFavsButton();

  const favIndex = favoritesList.indexOf(messageRecieved.innerHTML);
  favoritesList.splice(favIndex, 1);
}

function displayViewFavsButton() {
  if (!favoritesList.length) {
    hideElements([viewFavsButton]);
  }
}