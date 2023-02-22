// Define constants for phonemic classes and sound types
const PHONEMIC_CLASSES = {
  MONOPHTHONG: 'monophthong'
};

const SOUND_TYPES = {
  VOWEL: 'vowel'
};

// Define an array of words with their properties
const words = [{
  class: PHONEMIC_CLASSES.MONOPHTHONG,
  letter: 'p',
  sound: '/sounds/p.mp3',
  soundType: SOUND_TYPES.VOWEL,
  example: 'soup'
}];

// Define a function to create and set up a button for playing audio
const createButton = (audioFilePath) => {
  const button = document.createElement('button');
  button.textContent = 'Play';
  const audioFile = new Audio(audioFilePath);
  button.addEventListener('click', () => {
    audioFile.play();
  });
  return button;
};

// Get a reference to the button list div in the DOM
const buttonList = document.getElementById('button-list');

// Create a button element for each word and append it to the button list div
words.forEach((word) => {
  const button = createButton(word.sound);
  buttonList.appendChild(button);
});
