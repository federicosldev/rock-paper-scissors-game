const gameTable = document.getElementById('game-table');
const playPaper = document.getElementById('paper');
const playScissors = document.getElementById('scissors');
const playRock = document.getElementById('rock');
const playLizard = document.getElementById('lizard');
const playSpock = document.getElementById('spock');
const markerUserShow = document.getElementById('marker-user');
const markerPcShow = document.getElementById('marker-pc');
const resultContai = document.getElementById('result');
const textResult = document.getElementById('title-result');
const playAgainButton = document.getElementById('continue-play');
const selectUserIcon = document.getElementById('select-user');
const selectPcIcon = document.getElementById('select-pc');
const resultUserContainer = document.getElementById('result-paper');
const resultPcContainer = document.getElementById('result-scissors');

let markerUser = 0;
let markerPc = 0;

const options = {
  paper: {
    beats: 'rock',
    losesTo: 'scissors',
  },
  rock: {
    beats: 'scissors',
    losesTo: 'paper',
  },
  scissors: {
    beats: 'paper',
    losesTo: 'rock',
  },
  lizard: {
    beats: 'paper',
    losesTo: 'scissors',
  },
  spock: {
    beats: 'rock',
    losesTo: 'lizard',
  },
};

chooseWinner = userChoose => {
  const pcOptions = ['paper', 'rock', 'scissors', 'lizard', 'spock'];
  const pcRandomSelect = pcOptions[Math.floor(Math.random() * 5)];

  console.log(userChoose);
  console.log(pcRandomSelect);

  if (pcRandomSelect === userChoose) {
    console.log('Draw');
    gameTable.classList.add('off');
    showResult(userChoose, pcRandomSelect);
    resultContai.classList.replace('off', 'on');
    textResult.textContent = 'DRAW';
  } else if (options[userChoose].beats === pcRandomSelect) {
    console.log('Win');
    markerUser++;
    markerUserShow.textContent = markerUser;
    showResult(userChoose, pcRandomSelect);
    gameTable.classList.add('off');
    resultContai.classList.replace('off', 'on');
    textResult.textContent = 'YOU WIN';
  } else {
    console.log('Lose');
    markerPc++;
    markerPcShow.textContent = markerPc;
    showResult(userChoose, pcRandomSelect);
    gameTable.classList.add('off');
    resultContai.classList.replace('off', 'on');
    textResult.textContent = 'YOU LOSE';
  }
};
changeState = () => {
  gameTable.classList.remove('off');
  resultContai.classList.replace('on', 'off');
  textResult.textContent = '';
};
showResult = (userChoose, pcRandomSelect) => {
  console.log(userChoose, '---', pcRandomSelect);
  resultUserContainer.classList.add(`game__icon-${userChoose}`);
  selectUserIcon.src = `assets/icon-${userChoose}.svg`;
  selectPcIcon.src = `assets/icon-${pcRandomSelect}.svg`;
  resultPcContainer.classList.add(`game__icon-${pcRandomSelect}`);
};

playPaper.addEventListener('click', () => chooseWinner('paper'));
playScissors.addEventListener('click', () => chooseWinner('scissors'));
playRock.addEventListener('click', () => chooseWinner('rock'));
playLizard.addEventListener('click', () => chooseWinner('lizard'));
playSpock.addEventListener('click', () => chooseWinner('spock'));
playAgainButton.addEventListener('click', changeState);
