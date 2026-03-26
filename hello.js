// Soccer Career Adventure Game
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

/*
 * First decision: how serious the player is about training.
 */
function trainingStage() {
    console.log("You are a young player trying to improve.");
    console.log("1. Train seriously");
    console.log("2. Skip training");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            academyStage();
            break;
        case "2":
            endGame("Not good enough to reach the World Cup ❌");
            break;
        default:
            trainingStage();
    }
}

/*
 * Second decision: behavior at the academy level.
 */
function academyStage() {
    console.log("You join a top academy.");
    console.log("1. Stay focused");
    console.log("2. Get distracted");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            proStage();
            break;
        case "2":
            endGame("Not good enough to reach the World Cup ❌");
            break;
        default:
            academyStage();
    }
}

/*
 * Third decision: risk level during professional career.
 */
function proStage() {
    console.log("You're now a professional player.");
    console.log("1. Play carefully");
    console.log("2. Take big risks");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            worldCupStage();
            break;
        case "2":
            endGame("Career ended due to injury 🤕");
            break;
        default:
            proStage();
    }
}


/*
 * Displays the ending message to the player.
 */
function endgame(result)  {
    console.log("")
    console.log("Game Over! Refresh to play again.")
    console.log(result);
    console.log("")
    console.log("Thanks for playing! This was one of four endings.")
}


// Start the program
let user = prompt("Enter your name:");
startGame(user);