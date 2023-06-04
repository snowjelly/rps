const startButton = document.querySelector('#start');
const buttons = document.querySelector('.buttons');
const prompt = document.querySelector('.prompt');

startButton.addEventListener('click', startGame);

function startGame() {
  buttons.setAttribute('visible','');
  prompt.removeAttribute('visible');
}