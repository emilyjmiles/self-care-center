var affirmationButton = document.querySelector('.affirmation-message');
var mantraButton = document.querySelector('.mantra-message');
var receiveMessageButton = document.querySelector('.receive-button');
var clearMessageButton = document.querySelector('.clear-button');

var errorMessage = document.querySelector('.error-message');
var meditationIcon = document.querySelector('.mediation-guy');
var messageRecieved = document.querySelector('.received-message');

window.addEventListener('load', displayPageLoad);
receiveMessageButton.addEventListener('click', validateForm);
clearMessageButton.addEventListener('click', clearMessage);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showElements(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hidden');
  }
}

function hideElements(elements) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('hidden');
  }
}

function displayPageLoad() {
  showElements([meditationIcon]);
  hideElements([messageRecieved, clearMessageButton]);
}

function displayAffirmation() {
  messageRecieved.innerHTML = affirmations[getRandomIndex(affirmations)];
}

function displayMantra() {
  messageRecieved.innerHTML = mantras[getRandomIndex(mantras)];
}

function validateForm() {
  if (affirmationButton.checked === false && mantraButton.checked === false) {
    showElements([errorMessage]);
    errorMessage.innerHTML = 'Please select on option before submitting';
  } else {
    errorMessage.innerHTML = '';
    displayMessage();
  }
}

function displayMessage() {
  if (affirmationButton.checked === true) {
    showElements([messageRecieved, clearMessageButton]);
    hideElements([meditationIcon]);
    displayAffirmation();
  } else if (mantraButton.checked === true) {
    showElements([messageRecieved, clearMessageButton]);
    hideElements([meditationIcon]);
    displayMantra();
  }
}

function clearMessage() {
  messageRecieved.innerHTML = '';
  showElements([meditationIcon]);
  hideElements([messageRecieved, clearMessageButton]);

  if (affirmationButton.checked === true) {
    affirmationButton.checked = false;
  } else if (mantraButton.checked === true) {
    mantraButton.checked = false;
  }
}