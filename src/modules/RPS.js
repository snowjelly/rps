export default class RPS {
    static playerSelection(e) {
        const selection = e.target.id;

        if (selection === 'rock') {
            console.log(RPS.result(0, RPS.computerSelection()));
        }
        else if (selection === 'paper') {
            console.log(RPS.result(1, RPS.computerSelection()));
        }
        else if (selection === 'scissors') {
            console.log(RPS.result(2, RPS.computerSelection()));
        }
    }

    static computerSelection() {
        return Math.floor(Math.random() * 3);
    }

    static result(playerSelection, computerSelection) {
        if ((playerSelection + 1) % 3 === computerSelection) return "CPU won";
        else if (playerSelection === computerSelection) return "It is a draw";
        else return "You win";
    }
}