import RPS from './RPS';

export default class UI {
    static loadHomepage() {
        UI.loadPrompt();
    }

    static loadPrompt() {
        const startButton = document.querySelector('#start');
        const prompt = document.querySelector('.prompt');

        startButton.addEventListener('click', startGame);

        function startGame() {
            prompt.innerHTML = ``;
            UI.initRpsButtons();
        }
    }

    static initRpsButtons() {
        const buttons = document.querySelector('.buttons');

        buttons.innerHTML = `
        <button id="rock"  class="button">Rock</button>
        <button id="paper" class="button">Paper</button>
        <button id="scissors" class="button">Scissors</button>`;

        const rockButton = document.querySelector('#rock');
        const paperButton = document.querySelector('#paper');
        const scissorsButton = document.querySelector('#scissors');


        rockButton.addEventListener('click', RPS.playerSelection);
        paperButton.addEventListener('click', RPS.playerSelection);
        scissorsButton.addEventListener('click', RPS.playerSelection);
    }


}