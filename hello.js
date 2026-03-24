let user = prompt("What is your name?");
startgame(user);

function startgame(user)   {
    console.log("Hi, "+user+". Do you want to play?");
    console.log("1. Yes");
    console.log("2. No");
    console.log("");

    let choice = prompt("Please Choose:");
    switch (choice) {
        case "1":
            careerPath(user);
            return;
        case "2":
            console.log("You choose not to play, so bye.")
            endgame();
            return;
        default:
            console.log(choice+" is not valid. Please enter a number corresponding to your choice.");
            startgame(user);
    }
}

function endgame()  {
    console.log("")
    console.log("Game Over! Refresh to play again.")
    console.log("")
    console.log("Thanks for playing! This was one of five endings.")
}