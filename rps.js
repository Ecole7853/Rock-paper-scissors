const selections = ["ROCK", "PAPER", "SCISSORS"];
let win = 0;
let loss = 0;
let ties = 0;

function playGame() {
    let userChoice = window.prompt("Choose Rock, Paper or Scissors");
    userChoice = userChoice.toUpperCase();

    let mathSelect = Math.floor(Math.random() * selections.length);
    let computerChoice = selections[mathSelect];
    computerChoice = computerChoice.toUpperCase();

    if (userChoice === computerChoice) {
        ties++;
        window.alert("Tie, try again");
    }

    else if (
        (userChoice == "ROCK" && computerChoice == "SCISSORS") ||
        (userChoice == "PAPER" && computerChoice == "ROCK") ||
        (userChoice == "SCISSORS" && computerChoice == "PAPER")
    ) {
        win++
        window.alert("You win!");
    }

    else {
        loss++;
        window.alert("You Lose!")
    };
    window.alert(
        "Stats: \n Wins: " + win + "\n Losses: " + loss + "\n Ties: " + ties
    );
    let again = window.confirm("Would you like to try again?")
    if (again) {
        playGame();
    }
}

playGame();
