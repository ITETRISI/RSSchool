const container = document.querySelector('.container');
const menu = document.querySelector('.navigation__list');
const score = document.querySelector('.score');
const template = `
<div class="table__btn">
	<button class="table__btn-repeat">Repeat difficult words</button>
	<button class="table__btn-reset">Reset</button>
</div>
<table>
	<thead>
		<tr>
			<th>word <span class="arrow"></span></th>
			<th>translation</th>
			<th>train</th>
			<th>correct</th>
			<th>wrong</th>
			<th>percent</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>`;

const waitForEndingFinalResult = 3000;
const waitForEndingAudio = 1000;
const correctAudio = './src/audio/correct.mp3';
const wrongAudio = './src/audio/error.mp3';
const failureAudio = './src/audio/failure.mp3'
const successAudio = './src/audio/success.mp3'

const links = [{
	title: 'Action (set A)',
	image: './src/image/links/dance.jpg',
},
{
	title: 'Action (set B)',
	image: './src/image/links/swim.bddf0687.jpg',
},
{
	title: 'Animal (set A)',
	image: './src/image/links/bird.f0a80efa.jpg',
}, {
	title: 'Animal (set B)',
	image: './src/image/links/dog.jpg',
}, {
	title: 'Clothes',
	image: './src/image/links/blouse.jpg',
}, {
	title: 'Emotions',
	image: './src/image/links/smile.jpg',
},
{
	title: 'Transport',
	image: './src/image/links/transport.jpg',
},
{
	title: 'Sport',
	image: './src/image/links/sport.jpg',
},
];

let cards = [
	[{
		word: 'cry',
		translation: 'плакать',
		image: './src/image/cards/cry.jpg',
		audioSrc: './src/audio/cry.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'dance',
		translation: 'танцевать',
		image: './src/image/cards/dance.jpg',
		audioSrc: './src/audio/dance.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'dive',
		translation: 'нырять',
		image: './src/image/cards/dive.jpg',
		audioSrc: './src/audio/dive.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'draw',
		translation: 'рисовать',
		image: './src/image/cards/draw.jpg',
		audioSrc: './src/audio/draw.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'to fish',
		translation: 'ловить рыбу',
		image: './src/image/cards/fish.jpg',
		audioSrc: './src/audio/fish.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'fly',
		translation: 'летать',
		image: './src/image/cards/fly.jpg',
		audioSrc: './src/audio/fly.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'hug',
		translation: 'обнимать',
		image: './src/image/cards/hug.jpg',
		audioSrc: './src/audio/hug.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'jump',
		translation: 'прыгать',
		image: './src/image/cards/jump.jpg',
		audioSrc: './src/audio/jump.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
	[{
		word: 'open',
		translation: 'открывать',
		image: './src/image/cards/open.jpg',
		audioSrc: './src/audio/open.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'play',
		translation: 'играть',
		image: './src/image/cards/play.jpg',
		audioSrc: './src/audio/play.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'point',
		translation: 'указывать',
		image: './src/image/cards/point.jpg',
		audioSrc: './src/audio/point.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'ride',
		translation: 'ездить',
		image: './src/image/cards/ride.jpg',
		audioSrc: './src/audio/ride.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'run',
		translation: 'бегать',
		image: './src/image/cards/run.jpg',
		audioSrc: './src/audio/run.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'sing',
		translation: 'петь',
		image: './src/image/cards/sing.jpg',
		audioSrc: './src/audio/sing.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'skip',
		translation: 'пропускать, прыгать',
		image: './src/image/cards/skip.jpg',
		audioSrc: './src/audio/skip.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'swim',
		translation: 'плавать',
		image: './src/image/cards/swim.jpg',
		audioSrc: './src/audio/swim.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
	[{
		word: 'cat',
		translation: 'кот',
		image: './src/image/cards/cat.jpg',
		audioSrc: './src/audio/cat.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'chick',
		translation: 'цыплёнок',
		image: './src/image/cards/chick.jpg',
		audioSrc: './src/audio/chick.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'chicken',
		translation: 'курица',
		image: './src/image/cards/chicken.jpg',
		audioSrc: './src/audio/chicken.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'dog',
		translation: 'собака',
		image: './src/image/cards/dog.jpg',
		audioSrc: './src/audio/dog.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'horse',
		translation: 'лошадь',
		image: './src/image/cards/horse.jpg',
		audioSrc: './src/audio/horse.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'pig',
		translation: 'свинья',
		image: './src/image/cards/pig.jpg',
		audioSrc: './src/audio/pig.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'rabbit',
		translation: 'кролик',
		image: './src/image/cards/rabbit.jpg',
		audioSrc: './src/audio/rabbit.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'sheep',
		translation: 'овца',
		image: './src/image/cards/sheep.jpg',
		audioSrc: './src/audio/sheep.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
	[{
		word: 'bird',
		translation: 'птица',
		image: './src/image/cards/bird.jpg',
		audioSrc: './src/audio/bird.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'fish',
		translation: 'рыба',
		image: './src/image/cards/fish1.jpg',
		audioSrc: './src/audio/fish.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'frog',
		translation: 'жаба',
		image: './src/image/cards/frog.jpg',
		audioSrc: './src/audio/frog.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'giraffe',
		translation: 'жирафа',
		image: './src/image/cards/giraffe.jpg',
		audioSrc: './src/audio/giraffe.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'lion',
		translation: 'лев',
		image: './src/image/cards/lion.jpg',
		audioSrc: './src/audio/lion.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'mouse',
		translation: 'мышь',
		image: './src/image/cards/mouse.jpg',
		audioSrc: './src/audio/mouse.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'turtle',
		translation: 'черепаха',
		image: './src/image/cards/turtle.jpg',
		audioSrc: './src/audio/turtle.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'dolphin',
		translation: 'дельфин',
		image: './src/image/cards/dolphin.jpg',
		audioSrc: './src/audio/dolphin.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
	[{
		word: 'skirt',
		translation: 'юбка',
		image: './src/image/cards/skirt.jpg',
		audioSrc: './src/audio/skirt.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'pants',
		translation: 'брюки',
		image: './src/image/cards/pants.jpg',
		audioSrc: './src/audio/pants.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'blouse',
		translation: 'блузка',
		image: './src/image/cards/blouse.jpg',
		audioSrc: './src/audio/blouse.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'dress',
		translation: 'платье',
		image: './src/image/cards/dress.jpg',
		audioSrc: './src/audio/dress.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'boot',
		translation: 'ботинок',
		image: './src/image/cards/boot.jpg',
		audioSrc: './src/audio/boot.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'shirt',
		translation: 'рубашка',
		image: './src/image/cards/shirt.jpg',
		audioSrc: './src/audio/shirt.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'coat',
		translation: 'пальто',
		image: './src/image/cards/coat.jpg',
		audioSrc: './src/audio/coat.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'shoe',
		translation: 'туфли',
		image: './src/image/cards/shoe.jpg',
		audioSrc: './src/audio/shoe.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
	[{
		word: 'sad',
		translation: 'грустный',
		image: './src/image/cards/sad.jpg',
		audioSrc: './src/audio/sad.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'angry',
		translation: 'сердитый',
		image: './src/image/cards/angry.jpg',
		audioSrc: './src/audio/angry.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'happy',
		translation: 'счастливый',
		image: './src/image/cards/happy.jpg',
		audioSrc: './src/audio/happy.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'tired',
		translation: 'уставший',
		image: './src/image/cards/tired.jpg',
		audioSrc: './src/audio/tired.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'surprised',
		translation: 'удивлённый',
		image: './src/image/cards/surprised.jpg',
		audioSrc: './src/audio/surprised.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'scared',
		translation: 'испуганный',
		image: './src/image/cards/scared.jpg',
		audioSrc: './src/audio/scared.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'smile',
		translation: 'улыбка',
		image: './src/image/cards/smile.jpg',
		audioSrc: './src/audio/smile.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'laugh',
		translation: 'смех',
		image: './src/image/cards/laugh.jpg',
		audioSrc: './src/audio/laugh.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
	[{
		word: 'car',
		translation: 'машина',
		image: './src/image/cards/car.jpg',
		audioSrc: './src/audio/car.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'bicycle',
		translation: 'велосипед',
		image: './src/image/cards/bicycle.jpg',
		audioSrc: './src/audio/bicycle.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'bus',
		translation: 'автобус',
		image: './src/image/cards/bus.jpg',
		audioSrc: './src/audio/bus.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'motorbike',
		translation: 'мотоцикл',
		image: './src/image/cards/motorbike.jpg',
		audioSrc: './src/audio/motorbike.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'airplane',
		translation: 'самолет',
		image: './src/image/cards/airplane.jpg',
		audioSrc: './src/audio/airplane.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'ship',
		translation: 'корабль',
		image: './src/image/cards/ship.jpg',
		audioSrc: './src/audio/ship.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'helicopter',
		translation: 'вертолет',
		image: './src/image/cards/helicopter.jpg',
		audioSrc: './src/audio/helicopter.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'tram',
		translation: 'трамвай',
		image: './src/image/cards/tram.jpg',
		audioSrc: './src/audio/tram.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
	[{
		word: 'football',
		translation: 'футбол',
		image: './src/image/cards/football.jpg',
		audioSrc: './src/audio/football.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'hockey',
		translation: 'хоккей',
		image: './src/image/cards/hockey.jpg',
		audioSrc: './src/audio/hockey.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'swimming',
		translation: 'плавание',
		image: './src/image/cards/swimming.jpeg',
		audioSrc: './src/audio/swimming.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'basketball',
		translation: 'баскетбол',
		image: './src/image/cards/basketball.jpg',
		audioSrc: './src/audio/basketball.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'tennis',
		translation: 'тенис',
		image: './src/image/cards/tennis.jpg',
		audioSrc: './src/audio/tennis.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'rugby',
		translation: 'регби',
		image: './src/image/cards/rugby.jpg',
		audioSrc: './src/audio/rugby.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'polo',
		translation: 'поло',
		image: './src/image/cards/polo.jpg',
		audioSrc: './src/audio/polo.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	{
		word: 'boxing',
		translation: 'бокс',
		image: './src/image/cards/boxing.jpg',
		audioSrc: './src/audio/boxing.mp3',
		train: 0,
		correct: 0,
		wrong: 0,
	},
	],
];

let defaultCards;

if (sessionStorage.getItem('cards')) {
	cards = JSON.parse(sessionStorage.getItem('cards'));
	defaultCards = JSON.parse(sessionStorage.getItem('defaultCards'));
} else {
	sessionStorage.setItem('cards', JSON.stringify(cards));
	sessionStorage.setItem('defaultCards', JSON.stringify(cards));
	defaultCards = JSON.parse(sessionStorage.getItem('defaultCards'));
}

export {
	cards,
	defaultCards,
	links,
	container,
	menu,
	score,
	template, 
	waitForEndingFinalResult,
	waitForEndingAudio,
	correctAudio,
	wrongAudio,
	failureAudio,
	successAudio
};
