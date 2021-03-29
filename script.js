// Starts the game.
Game()

// Generates a random selection from the computer player.
function computerPlay() {
    let possibleAnswers = ["rock", "paper", "scissors"];
    let answer = possibleAnswers[Math.floor(Math.random() * 3)];
    return answer
}

//Prompts the user for a selection and determines winner of the two. Repeats five times.
function Game() {
    let roundResult = "";
    let humanCounter = 0;
    let computerCounter = 0;
    for (let i = 1; i <= 5; i++) {
        humanInput = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
        computerInput = computerPlay();
        console.log(humanInput);
        console.log(computerInput);
        if (computerInput === "rock") {
            if (humanInput === "rock") {
                roundResult = "It's a tie";
            }
            else if (humanInput === "paper") {
                roundResult = "You win";
                humanCounter+=1;
            }
            else {
                roundResult =  "computer wins"
                computerCounter+=1;
            }
        }
        if (computerInput === "paper") {
            if (humanInput === "rock") {
                roundResult = "computer wins";
                computerCounter+=1;
                }
                else if (humanInput === "paper") {
                    roundResult = "It's a tie"
                }
                else {
                    roundResult = "You win";
                    humanCounter+=1;
                }
        }
        if (computerInput === "scissors") {
            if (humanInput === "rock") {
                roundResult = "You win";
                humanCounter+=1;
                }
                else if (humanInput === "paper") {
                    roundResult = "Computer wins";
                    computerCounter+=1;
                }
                else {
                    roundResult = "It's a tie";
                }
        }
        console.log(roundResult);
    }
return console.log(humanCounter > computerCounter ? "You won the game" : "You lost the game");
}

