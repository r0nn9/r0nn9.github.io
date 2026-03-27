// Soccer Career Adventure Game
// Multiple paths, stats, and endings

let skill = 0;
let discipline = 0;
let fitness = 0;

let season = 1;
let maxSeasons = 3;

/*
 * Start Game
 */
function startGame(playerName) {
    console.log("Welcome " + playerName + "! Ready to start your soccer career?");
    console.log("1. Yes");
    console.log("2. No");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            playSeasons(); // LOOP ENTRY
            break;
        case "2":
            endGame("You never started your career.");
            break;
        default:
            startGame(playerName);
    }
}

/*
 * MAIN LOOP
 */
function playSeasons() {
    while (season <= maxSeasons) {
        console.log("----- Season " + season + " -----");

        trainingStage();
        academyStage();
        proStage();

        season++;
    }

    worldCupStage(); // after loop ends
}

/*
 * Training Stage
 */
function trainingStage() {
    console.log("You are training this season.");
    console.log("1. Train intensely");
    console.log("2. Train normally");
    console.log("3. Skip training");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            skill += 2;
            fitness -= 1;
            break;
        case "2":
            skill += 1;
            fitness += 1;
            break;
        case "3":
            discipline -= 2;
            break;
        default:
            trainingStage();
            return;
    }
}

/*
 * Academy Stage
 */
function academyStage() {
    console.log("Academy decisions this season.");
    console.log("1. Stay focused");
    console.log("2. Build teamwork");
    console.log("3. Get distracted");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            skill += 2;
            discipline += 1;
            break;
        case "2":
            discipline += 2;
            break;
        case "3":
            discipline -= 2;
            fitness -= 1;
            break;
        default:
            academyStage();
            return;
    }
}

/*
 * Pro Stage
 */
function proStage() {
    console.log("Professional matches this season.");
    console.log("1. Play safe");
    console.log("2. Play aggressively");
    console.log("3. Train extra");

    let choice = prompt("Choose an option:");

    switch (choice) {
        case "1":
            discipline += 1;
            break;
        case "2":
            skill += 2;
            fitness -= 2;
            break;
        case "3":
            fitness += 2;
            break;
        default:
            proStage();
            return;
    }
}

/*
 * Final Outcome
 */
function worldCupStage() {
    console.log("You reach the World Cup after " + maxSeasons + " seasons!");

    let total = skill + discipline + fitness;

    console.log("Final Stats:");
    console.log("Skill:", skill);
    console.log("Discipline:", discipline);
    console.log("Fitness:", fitness);

    if (total >= 15) {
        endGame("You became a LEGEND and won the World Cup!");
    } else if (total >= 10) {
        endGame("You made it far but lost in the finals.");
    } else if (total >= 5) {
        endGame("You had an average career.");
    } else {
        endGame("Your career never reached the top level.");
    }
}

/*
 * End Game
 */
function endGame(result) {
    console.log("");
    console.log("Game Over!");
    console.log(result);
    console.log("Try again and make different choices!");
}


// Start
let user = prompt("Enter your name:");
startGame(user);