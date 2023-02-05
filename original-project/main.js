var receiveMessage = document.querySelector('.receive-button');

receiveMessage.addEventListener('click', displayAffirmation)


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function showElements(elements) {
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.remove('hidden');
//   }
// }

// function hideElements(elements) {
//   for (var i = 0; i < elements.length; i++) {
//     elements[i].classList.add('hidden');
//   }
// }

function displayAffirmation() {
  affirmations[getRandomIndex(affirmations)];

}
