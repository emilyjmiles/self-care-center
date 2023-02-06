const affirmationButton = document.querySelector('.affirmation-message');
const mantraButton = document.querySelector('.mantra-message');
const receiveMessageButton = document.querySelector('.receive-button');
const clearMessageButton = document.querySelector('.clear-button');
const emptyFavButton = document.querySelector('.favorite-empty');
const selectedFavButton = document.querySelector('.favorite-selected');
const viewFavsButton = document.querySelector('.view-favorites');
const backHomeButton = document.querySelector('.home-button');

const errorMessage = document.querySelector('.error-message');
const meditationIcon = document.querySelector('.mediation-guy');
const messageRecieved = document.querySelector('.received-message');
const selectionBox = document.querySelector('.selection-section');
const messageBox = document.querySelector('.message-section');
const favoritesView = document.querySelector('.favorites-view');
const footer = document.querySelector('.footer');

const favoritesList = [];

window.addEventListener('load', displayHomePage);
receiveMessageButton.addEventListener('click', validateForm);
clearMessageButton.addEventListener('click', displayHomePage);
emptyFavButton.addEventListener('click', addToFavorites);
selectedFavButton.addEventListener('click', removeFromFavorites);
viewFavsButton.addEventListener('click', displayFavorites);
backHomeButton.addEventListener('click', displayHomePage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showElements(elements) {
  elements.forEach(element => element.classList.remove('hidden'));
};

function hideElements(elements) {
  elements.forEach(element => element.classList.add('hidden'));
}

function displayHomePage() {
  showElements([selectionBox, messageBox, meditationIcon]);
  hideElements([messageRecieved, clearMessageButton, emptyFavButton, selectedFavButton, favoritesView, footer]);
  displayViewFavsButton();
  clearMessage();
}

function validateForm() {
  if (!affirmationButton.checked && !mantraButton.checked) {
    errorMessage.innerHTML = 'Please select on option before submitting';
  } else {
    errorMessage.innerHTML = '';
    displayMessage();
  }
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

function addToFavorites() {
  if (!favoritesList.includes(messageRecieved.innerHTML)) {
    favoritesList.push(messageRecieved.innerHTML);
  }

  showElements([selectedFavButton]);
  hideElements([emptyFavButton]);
  displayViewFavsButton();
}

function removeFromFavorites() {
  const favIndex = favoritesList.indexOf(messageRecieved.innerHTML);
  favoritesList.splice(favIndex, 1);

  showElements([emptyFavButton]);
  hideElements([selectedFavButton]);
  displayViewFavsButton();
}

function displayViewFavsButton() {
  if (!favoritesList.length) {
    hideElements([viewFavsButton]);
  } else {
    showElements([viewFavsButton]);
  }
}

function clearMessage() {
  messageRecieved.innerHTML = '';

  if (affirmationButton.checked) {
    affirmationButton.checked = false;
  } else if (mantraButton.checked) {
    mantraButton.checked = false;
  }
}

function getFavCards() {
  favoritesView.innerHTML = '';
  favoritesList.forEach((fav, index) => {
    favoritesView.innerHTML +=
      `<section class="fav-card" id="${index}">
      <img class="fav-card-bg" src="./assets/selection-bg.webp">
      <div class="fav-card-contents">
        <h3>${fav}</h3>
        <img role="button" class="fav favorite-selected" src="./assets/favorite-selected.webp" onclick="removeFavCard()"/>
      </div>
    </section>`;
  });
}

function displayFavorites() {
  getFavCards();

  showElements([favoritesView, footer]);
  hideElements([selectionBox, messageBox]);
}

function removeFavCard() {
  const card = event.target.closest('section');
  favoritesList.splice(card.id, 1);
  getFavCards();
}