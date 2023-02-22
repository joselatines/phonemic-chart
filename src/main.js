// create an instance of the SpeechSynthesis API
const synth = window.speechSynthesis;

// create a function that takes text and speaks it
export function speak(text) {
	// create a new SpeechSynthesisUtterance
	const utterance = new SpeechSynthesisUtterance(text);

	// set the voice and language for the utterance (optional)
	utterance.voice = synth.getVoices()[1]; // replace with desired voice
	utterance.lang = 'en-US'; // replace with desired language

	// speak the utterance
	synth.speak(utterance);
}

const phoneticTypes = {
	monophthong: 'monophthong',
	diphthongs: 'diphthongs',
};
const soundTypes = {
	vowel: 'vowel',
	consonant: 'consonant',
};

// Define an array of words with their properties
const words = [
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'i',
		sound: '/sounds/i-vowel.mp3',
		soundType: soundTypes.vowel,
		example: 'swim',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'i:',
		sound: '/sounds/i-vowel-dots.mp3',
		soundType: soundTypes.vowel,
		example: 'sheep',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'ʊ',
		sound: '/sounds/u-vowel.mp3',
		soundType: soundTypes.vowel,
		example: 'book',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'u:',
		sound: '/sounds/u-vowel-dots.mp3',
		soundType: soundTypes.vowel,
		example: 'shoot',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'e',
		sound: '/sounds/e-vowel.mp3',
		soundType: soundTypes.vowel,
		example: 'left',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'ə',
		sound: '/sounds/e-vowel-inverted.mp3',
		soundType: soundTypes.vowel,
		example: 'teacher',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'ɜ:',
		sound: '/sounds/e-vowel-inverted-dots.mp3',
		soundType: soundTypes.vowel,
		example: 'her',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'ɔ:',
		sound: '/sounds/c-vowel-dots.mp3',
		soundType: soundTypes.vowel,
		example: 'door',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'æ',
		sound: '/sounds/a-vowel.mp3',
		soundType: soundTypes.vowel,
		example: 'cat',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'ʌ',
		sound: '/sounds/v-vowel-inverted.mp3',
		soundType: soundTypes.vowel,
		example: 'up',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'ɑ:',
		sound: '/sounds/a-vowel-dots.mp3',
		soundType: soundTypes.vowel,
		example: 'far',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.monophthong,
		letter: 'ɒ',
		sound: '/sounds/a-vowel-inverted.mp3',
		soundType: soundTypes.vowel,
		example: 'on',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'ɪə',
		sound: '/sounds/ie-diphthong.mp3',
		soundType: soundTypes.vowel,
		example: 'here',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'eə',
		sound: '/sounds/ea-diphthong.mp3',
		soundType: soundTypes.vowel,
		example: 'hair',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'ʊə',
		sound: '/sounds/ua-diphthong.mp3',
		soundType: soundTypes.vowel,
		example: 'cure',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'aʊ',
		sound: '/sounds/au-diphthong.mp3',
		soundType: soundTypes.vowel,
		example: 'cow',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'əʊ',
		sound: '/sounds/au-diphthong-inverted.mp3',
		soundType: soundTypes.vowel,
		example: 'show',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'eɪ',
		sound: '/sounds/ei-diphthong.mp3',
		soundType: soundTypes.vowel,
		example: 'wait',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'aɪ',
		sound: '/sounds/ai-diphthong.mp3',
		soundType: soundTypes.vowel,
		example: 'my',
		exampleImg: '',
	},
	{
		phoneticType: phoneticTypes.diphthongs,
		letter: 'ɔɪ',
		sound: '/sounds/ci-diphthong.mp3',
		soundType: soundTypes.vowel,
		example: 'boy',
		exampleImg: '',
	},
	{
		letter: 'p',
		sound: '/sounds/p-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'pea',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 'f',
		sound: '/sounds/f-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'fly',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 't',
		sound: '/sounds/t-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'tea',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 'θ',
		sound: '/sounds/o-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'think',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 'ʧ',
		sound: '/sounds/tf-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'cheese',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 's',
		sound: '/sounds/s-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'sea',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 'ʃ',
		sound: '/sounds/shaa-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'shall',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 'k',
		sound: '/sounds/k-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'car',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 'h',
		sound: '/sounds/h-consonant-unvoiced.mp3',
		soundType: soundTypes.consonant,
		example: 'hat',
		exampleImg: '',
		unvoiced: true,
	},
	{
		letter: 'b',
		sound: '/sounds/b-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'boat',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'v',
		sound: '/sounds/v-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'video',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'd',
		sound: '/sounds/d-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'dog',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'ð',
		sound: '/sounds/d-consonant-voiced-rare.mp3',
		soundType: soundTypes.consonant,
		example: 'this',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'ʤ',
		sound: '/sounds/d3-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'june',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'z',
		sound: '/sounds/z-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'zoo',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'ʒ',
		sound: '/sounds/3-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'television',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'g',
		sound: '/sounds/g-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'go',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'm',
		sound: '/sounds/m-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'man',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'n',
		sound: '/sounds/n-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'now',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'ŋ',
		sound: '/sounds/n-consonant-voiced-rare.mp3',
		soundType: soundTypes.consonant,
		example: 'singer',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'r',
		sound: '/sounds/r-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'red',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'l',
		sound: '/sounds/l-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'love',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'w',
		sound: '/sounds/w-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'wet',
		exampleImg: '',
		unvoiced: false,
	},
	{
		letter: 'j',
		sound: '/sounds/j-consonant-voiced.mp3',
		soundType: soundTypes.consonant,
		example: 'yes',
		exampleImg: '',
		unvoiced: false,
	},
];

const createGroup = function (word) {
	let chartGroupContainer;
	const divElement = document.createElement('div');
	const wordSpanElement = document.createElement('span');
	const exampleSpanElement = document.createElement('span');

	// styles
	exampleSpanElement.classList.add(
		'example',
		'text-xs',
		'text-black',
		'capitalize',
		'cursor-pointer',
	);
	divElement.classList.add(
		'p-5',
		'drop-shadow',
		'border-solid',
		'border-2',
		'border-slate-800',
		'text-white',
		'flex',
		'items-center',
		'justify-center',
		'text-3xl',
		'word'
	);
	wordSpanElement.classList.add('cursor-pointer');

	if (word.phoneticType === phoneticTypes.diphthongs) {
		chartGroupContainer = document.getElementById('chart-right');
		divElement.classList.add('bg-orange-400');
	} else if (word.phoneticType === phoneticTypes.monophthong) {
		chartGroupContainer = document.getElementById('chart-left');
		divElement.classList.add('bg-cyan-400');
	} else if (!word.phoneticType) {
		chartGroupContainer = document.getElementById('chart-bottom');
		divElement.classList.add('bg-red-400');

		if (word.unvoiced) divElement.classList.add('unvoiced');
	} else return;

	// add content to elements
	wordSpanElement.innerHTML = word.letter;
	exampleSpanElement.innerHTML = word.example;

	addAudio(wordSpanElement, word.sound);
	exampleSpanElement.addEventListener('click', () => speak(word.example));
	// add elements to the DOM
	divElement.appendChild(wordSpanElement);
	divElement.appendChild(exampleSpanElement);
	chartGroupContainer.appendChild(divElement);
};

const addAudio = (htmlElement, audioFilePath) => {
	const audioFile = new Audio(audioFilePath);
	htmlElement.addEventListener('click', function () {
		audioFile.play();
	});
};

words.forEach(function (word) {
	createGroup(word);
});
