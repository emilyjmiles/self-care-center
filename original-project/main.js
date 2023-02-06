var affirmationButton = document.querySelector('.affirmation-message');
var mantraButton = document.querySelector('.mantra-message');
var receiveMessageButton = document.querySelector('.receive-button');
var clearMessageButton = document.querySelector('.clear-button');

var errorMessage = document.querySelector('.error-message');
var meditationIcon = document.querySelector('.mediation-guy');
var messageRecieved = document.querySelector('.received-message');
var favButtonSection = document.querySelector('.fav-buttons');
var emptyFavButton = document.querySelector('.favorite-empty');
var selectedFavButton = document.querySelector('.favorite-selected');

window.addEventListener('load', displayPageLoad);
receiveMessageButton.addEventListener('click', validateForm);
clearMessageButton.addEventListener('click', clearMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showElements(elements) {
  elements.forEach(element => element.classList.remove('hidden'));
};

function hideElements(elements) {
  elements.forEach(element => element.classList.add('hidden'));
};

function displayPageLoad() {
  showElements([meditationIcon]);
  hideElements([messageRecieved, clearMessageButton, favButtonSection]);
}

function displayAffirmation() {
  messageRecieved.innerHTML = affirmations[getRandomIndex(affirmations)];
}

function displayMantra() {
  messageRecieved.innerHTML = mantras[getRandomIndex(mantras)];
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
    showElements([messageRecieved, clearMessageButton, favButtonSection]);
    hideElements([meditationIcon]);
    displayAffirmation();
  } else if (mantraButton.checked) {
    showElements([messageRecieved, clearMessageButton, favButtonSection]);
    hideElements([meditationIcon]);
    displayMantra();
  }
}

function clearMessage() {
  messageRecieved.innerHTML = '';
  showElements([meditationIcon]);
  hideElements([messageRecieved, clearMessageButton, favButtonSection]);

  if (affirmationButton.checked) {
    affirmationButton.checked = false;
  } else if (mantraButton.checked) {
    mantraButton.checked = false;
  }
}