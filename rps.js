let gameCount = ""; 
let playerSelection = ""; 
let computerSelection = ""; 
let playerWins = 0; 
let computerWins = 0; 
let ties = 0; 
let currentStreak = 0; 
let tieStreak = 0;
let winStreak = 0;
let loseStreak = 0;
let totalRounds = 0;
let totalGames = 0;
let prevResult = "";
let result = "";
let rock = "";
let paper = "";
let scissors = "";
let play = false;

const invalidString = "Invalid string. Please refresh the page and enter 'rock', 'paper', or 'scissors'";


const gameStart = (e) => {
  if (e.target.dataset.choice === "start") {
    play = true;
    // change css to reflect game start
      const buttonDiv = document.querySelector('.buttons');
      const rockBtn = document.createElement('button');
      const paperBtn = document.createElement('button');
      const scissorsBtn = document.createElement('button');
  
      rockBtn.setAttribute('id', 'btn');
      paperBtn.setAttribute('id', 'btn');
      scissorsBtn.setAttribute('id', 'btn');
  
      rockBtn.setAttribute('data-choice', 'rock');
      paperBtn.setAttribute('data-choice', 'paper');
      scissorsBtn.setAttribute('data-choice', 'scissors');
  
      rockBtn.textContent = 'Rock'
      paperBtn.textContent = 'Paper'
      scissorsBtn.textContent = 'Scissors'

      const prompt = document.querySelector('.prompt h3');
      prompt.textContent = "Make your choice";

      const promptBtn = document.querySelector('.prompt button');
      promptBtn.toggleAttribute('hidden');
  
  
      buttonDiv.appendChild(rockBtn);
      buttonDiv.appendChild(paperBtn);
      buttonDiv.appendChild(scissorsBtn);

      addButtonListeners();
    return console.log(true);
  } else {
    return false;
  }
}

const playerChoice = (e) => {
  if (e.target.dataset.choice === "rock") {
    return console.log("rock");
  } else if (e.target.dataset.choice === "paper") {
    return console.log("paper");
  } else if (e.target.dataset.choice === "scissors") {
    return console.log("scissors");
  } else {
    return console.log("ERROR");
  }
}

const startButton = document.querySelector('.prompt button');
startButton.addEventListener('click', gameStart, {
  once: true
});


const addButtonListeners = () => {
  const buttons = document.querySelectorAll('#btn');
  buttons.forEach(button => button.addEventListener('click', playerChoice, {
    once: true
  }));
}





function gameWinCheck() {
    if (playerWins > computerWins && playerWins > ties) {
        return "Overall..You won!";
    } else if (computerWins > playerWins && computerWins > ties) {
        return "Overall..You lost.."
    } else {
        return "Overall..You tied?.."
    }
}

// future additions could include making a leaderboard, UI, and then eventually online multiplayer.
function game() { 
    totalRounds++;
    console.log("In the " + totalRounds + " round(s) you played. You won " + playerWins + ", tied " + ties + ", and lost " + computerWins);
    console.log("Highest winstreak: " + winStreak + " Highest losestreak: " + loseStreak + " Highest tiestreak: " + tieStreak);
    console.log(gameWinCheck());
}
function getComputerChoice() {
    computerSelection = Math.floor(Math.random()*3);

    //convert Math.random result into something readable
    if (computerSelection === 0) {
        computerSelection = 'rock';
    }
    if (computerSelection === 1) {
        computerSelection = 'paper';
    }
    if (computerSelection === 2) {
        computerSelection = 'scissors';
    }

    return computerSelection;
}

function equalsIgnoringCase(text, other) { 
return text.localeCompare(other, 'en', { sensitivity: 'base' }) === 0;
}

function logVariables() {
    console.log("result = " + result);
    console.log("prevResult = " + prevResult);
    console.log("winStreak = " + winStreak);
    console.log("loseStreak = " + loseStreak);
    console.log("tieStreak = " + tieStreak);
    console.log("currentStreak = " + currentStreak);
}

function checkStreak() { //there was a bug where streaks would say 0 after clearly completing a round.
    if (result === "win" && winStreak === 0) {
        winStreak = 1;
    }
    if (result === "lose" && loseStreak === 0) {
        loseStreak = 1;
    }
    if (result === "tie" && tieStreak === 0) {
        tieStreak = 1;
    }
            //if prevResult is different from the latest result reset the streak counter. otherwise increment currentStreak and update
            //the various max streakcounters
            if (prevResult != "" && result != prevResult) { 
                currentStreak = 1;
            } else {
                currentStreak++;
                if (prevResult === "win") {
                    winStreak = currentStreak;
                } else if (prevResult === "lose") {
                    loseStreak = currentStreak;
                } else if (prevResult === "tie") {
                    tieStreak = currentStreak;
                }
            }
}

function playRound(computerSelection) {
    //Game logic
    if (playerChoice === "rock") { //if player chooses rock
        if (computerSelection === 'rock') {
            prevResult = result;
            ties++;
            result = "tie";
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
        if (computerSelection === 'paper') {
            prevResult = result;
            computerWins++;
            result = "lose"
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
        if (computerSelection === 'scissors') {
            prevResult = result;
            playerWins++;
            result = "win";
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
    }
    else if (playerChoice === "paper") { //if player chooses paper
        if (computerSelection === 'rock') {
            prevResult = result;
            playerWins++;
            result = "win";
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
        if (computerSelection === 'paper') {
            prevResult = result;
            ties++;
            result = "tie";
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
        if (computerSelection === 'scissors') {
            prevResult = result;
            computerWins++;
            result = "lose"
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
    }
    else if (playerChoice === "scissors") { //if player chooses scissors
        if (computerSelection === 'rock') {
            prevResult = result;
            computerWins++;
            result = "lose"
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
        if (computerSelection === 'paper') {
            prevResult = result;
            playerWins++;
            result = "win";
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
        if (computerSelection === 'scissors') {
            prevResult = result;
            ties++;
            result = "tie";
            checkStreak();
            return "The computer chose " + computerSelection + ". You " + result + ". You now have a " + result + " streak of " + currentStreak;
        }
    }
}

function getRoundsPlayed() {
return console.log("You played " + totalRounds + " rounds and " + totalGames + " game(s) during this session.")
}
