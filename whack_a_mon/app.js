
const spawnPoints = document.querySelectorAll('.spawn');
const spawnBoxes = document.querySelectorAll('.spawn-box')
const monster = document.querySelector('.monster');
const timeDisplay = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');

let score = 0;
// let lastSpawn = 0;
let currentSpawn = 0;
let monsterPosition = 0;

const spriteWidth = 16;
const spriteHeight = 16;
const drawWidth = 128;
const drawHeight = 128;

// let spawnContexts = [];
// spawnPoints.forEach(spawn => {
//   spawnContexts.push(spawn.getContext('2d'));
// });

// console.log('Spawn Contexts: ', spawnContexts);

spawnBoxes.forEach(spawnBox => {
  spawnBox.addEventListener('mousedown', () => {
    if (spawnBox.id.charAt(3) == monsterPosition) {
      score++;
      scoreDisplay.innerHTML = score;
      monsterPosition = null;
      console.log('Got em!');
    }
  });
});

function chooseSpawn() {
  let nextSpawn = Math.floor(Math.random() * 9);
  while (nextSpawn === currentSpawn) {
    nextSpawn = Math.floor(Math.random() * 9);
  }
  // lastSpawn = currentSpawn;
  spawnPoints[currentSpawn].classList.remove('monster');
  currentSpawn = nextSpawn;
  monsterPosition = nextSpawn;
  spawnPoints[currentSpawn].classList.add('monster');
  drawMonster(currentSpawn);
}

// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) s=source d=destination
function drawMonster(spawn) {
  let canvas = document.getElementById(`mon${spawn}`);
  console.log(`Selected Canvas: `, canvas);
  let ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false; // necessary to fix blurry scaling
  let monImg = new Image();
  monImg.onload = function() {
    ctx.drawImage(monImg, 0, 0, 16, 16, 0, 4, 64, 64);
  }
  monImg.src = './assets/SpriteSheet1.png';
}

function moveMonster() {
  let timerId = null;
  timerId = setInterval(chooseSpawn, 1000);
}

// moveMonster();
chooseSpawn();
