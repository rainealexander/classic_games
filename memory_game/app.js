// card array with two of each image
const cardArray = [
  {
    name: 'birdfoot',
    image: 'assets/birdfoot.png'
  },
  {
    name: 'daybloom',
    image: 'assets/daybloom.png'
  },
  {
    name: 'frostlily',
    image: 'assets/frostlily.png'
  },
  {
    name: 'madroot',
    image: 'assets/madroot.png'
  },
  {
    name: 'moonflower',
    image: 'assets/moonflower.png'
  },
  {
    name: 'thornroot',
    image: 'assets/thornroot.png'
  },{
    name: 'birdfoot',
    image: 'assets/birdfoot.png'
  },
  {
    name: 'daybloom',
    image: 'assets/daybloom.png'
  },
  {
    name: 'frostlily',
    image: 'assets/frostlily.png'
  },
  {
    name: 'madroot',
    image: 'assets/madroot.png'
  },
  {
    name: 'moonflower',
    image: 'assets/moonflower.png'
  },
  {
    name: 'thornroot',
    image: 'assets/thornroot.png'
  }
];

// randomly sort array
cardArray.sort(() => Math.random() - 0.5);

const cardGrid = document.getElementById('card-grid');
const gameScore = document.getElementById('game-score');

// make board
function createBoard() {
  cardArray.forEach((card, index) => {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src','assets/cardback2.png');
    cardElement.setAttribute('id', index);
    cardElement.setAttribute('class', 'card-image');
    cardElement.addEventListener('click', flipCard);
    cardGrid.appendChild(cardElement);
  })
}

createBoard();


let cardPick = null;
let matches = [];

function checkMatch (card) {
  const card1 = document.getElementById(cardPick.id);
  const card2 = document.getElementById(card.id)
  if (card.name === cardPick.name) {
    // match!
    card1.setAttribute('src', 'assets/checkcard.png');
    card2.setAttribute('src', 'assets/checkcard.png');
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
    matches.push(card.name);
    cardPick = null;
    gameScore.innerHTML = matches.length;
    // check win condition
    if (matches.length === cardArray.length / 2) {
      gameScore.innerHTML = 'congrats, you found all of the matches!'
    }
    return;
  }
  // no match
  card1.setAttribute('src', 'assets/cardback2.png');
  card2.setAttribute('src', 'assets/cardback2.png');
  
  cardPick = null;
  return;
}

function flipCard() {
  const cardId = this.getAttribute('id');
  this.setAttribute('src', cardArray[cardId].image);
  if (!cardPick) {
    cardPick = { name: cardArray[cardId].name, id: cardId };
  } else {
    // TODO: check for duplicate card picked
    setTimeout(() => {
      checkMatch({ name: cardArray[cardId].name, id: cardId });
    }, 750);
  }
}
