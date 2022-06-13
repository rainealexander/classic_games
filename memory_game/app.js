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

// make board
function createBoard() {
  cardArray.forEach((card, index) => {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src','assets/cardback2.png');
    cardElement.setAttribute('data-id', index);
    cardElement.setAttribute('class', 'card-image');
    cardGrid.appendChild(cardElement);
  })
}

createBoard();
