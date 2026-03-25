// Soccer Career Text Adventure Game
// Your goal is to reach one of four different endings.

/*
 * Starts the game and asks the player if they want to begin.
 */
function startGame(playerName) {
    console.log("Welcome " + playerName + "! Ready to start your soccer career?");
    console.log("1. Yes");
    console.log("2. No");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            trainingStage();
            break;
        case "2":
            console.log("You decided not to pursue soccer.");
            endGame("You never started your career.");
            break;
        default:
            console.log("Invalid choice.");
            startGame(playerName); // retry
    }
}

function endgame()  {
    console.log("")
    console.log("Game Over! Refresh to play again.")
    console.log("")
    console.log("Thanks for playing! This was one of five endings.")
}


// Start the program
let user = prompt("Enter your name:");
startGame(user);