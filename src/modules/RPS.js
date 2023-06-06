export default class RPS {
    static playerSelection(e) {
        RPS.result(e.target.id);
    }

    static computerSelection() {
        const selection = Math.floor(Math.random() * 3);

        if (selection === 0) {
            return 'rock';
        }
        else if (selection === 1) {
            return 'paper';
        }
        else if (selection === 2) {
            return 'scissors';
        }
    }

    static result(playerSelection) {
        const computerSelection = RPS.computerSelection();

        if (playerSelection === computerSelection) {
            console.log('tie');
            console.log('p:' + playerSelection);
            console.log('cpu:' + computerSelection);
        }
    }
}