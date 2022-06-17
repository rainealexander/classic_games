// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) s=source d=destination

const spawnPoints = document.querySelectorAll('.spawn');
const spawnBoxes = document.querySelectorAll('.spawnBox')
const monster = document.querySelector('.monster');
const timeDisplay = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');



let score = 0;
// let lastSpawn = 0;
let currentSpawn = 0;
let monsterPosition = 0;

let spawnContexts = spawnPoints.forEach(spawn => {
  return spawn.getContext('2d');
});

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
}

chooseSpawn();

function moveMonster() {
  let timerId = null;
  timerId = setInterval(chooseSpawn, 1000);
}

moveMonster();
