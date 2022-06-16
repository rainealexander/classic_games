// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) s=source d=destination

const spawnPoints = document.querySelectorAll('.spawn');
const monster = document.querySelector('.monster');
const timeDisplay = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');

let spawnContexts = spawnPoints.forEach(spawn => {
  return spawn.getContext('2d');
})

let score = 0;
let lastSpawn = 0;
let currentSpawn = 0;

function chooseSpawn() {
  spawnPoints[lastSpawn].classList.remove('monster');

  let randomSpawn = Math.floor(Math.random() * 9);
  randomSpawn.classList.add('monster');
}

function moveMonster() {

}
