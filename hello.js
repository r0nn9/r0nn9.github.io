let skill = 0;
let discipline = 0;
let fitness = 0;

let season = 1;
let maxSeasons = 3;

function updateStats() {
    document.getElementById("skill").textContent = skill;
    document.getElementById("discipline").textContent = discipline;
    document.getElementById("fitness").textContent = fitness;
}

function setStory(text) {
    document.getElementById("story").textContent = text;
}

function setChoices(options) {
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option.text;
        btn.onclick = option.action;
        choicesDiv.appendChild(btn);
    });
}

/* =========================
   GAME START / RESET
========================= */
function startGameUI() {
    skill = 0;
    discipline = 0;
    fitness = 0;
    season = 1;

    updateStats();   // FIX: ensures UI resets immediately
    nextSeason();
}

/* =========================
   GAME FLOW
========================= */
function nextSeason() {
    if (season > maxSeasons) {
        worldCupStage();
        return;
    }

    setStory("Season " + season + ": How do you train?");
    setChoices([
        {
            text: "Train intensely",
            action: () => {
                skill += 2;
                fitness -= 1;
                updateStats();
                academyStage();
            }
        },
        {
            text: "Train normally",
            action: () => {
                skill += 1;
                fitness += 1;
                updateStats();
                academyStage();
            }
        },
        {
            text: "Skip training",
            action: () => {
                discipline -= 2;
                updateStats();
                academyStage();
            }
        }
    ]);

    updateStats();
}

function academyStage() {
    setStory("Academy decisions:");
    setChoices([
        {
            text: "Stay focused",
            action: () => {
                skill += 2;
                discipline += 1;
                updateStats();
                proStage();
            }
        },
        {
            text: "Build teamwork",
            action: () => {
                discipline += 2;
                updateStats();
                proStage();
            }
        },
        {
            text: "Get distracted",
            action: () => {
                discipline -= 2;
                fitness -= 1;
                updateStats();
                proStage();
            }
        }
    ]);

    updateStats();
}

function proStage() {
    setStory("Professional matches:");
    setChoices([
        {
            text: "Play safe",
            action: () => {
                discipline += 1;
                updateStats();
                endSeason();
            }
        },
        {
            text: "Play aggressively",
            action: () => {
                skill += 2;
                fitness -= 2;
                updateStats();
                endSeason();
            }
        },
        {
            text: "Train extra",
            action: () => {
                fitness += 2;
                updateStats();
                endSeason();
            }
        }
    ]);

    updateStats();
}

function endSeason() {
    season++;
    nextSeason();
}

/* =========================
   ENDING SYSTEM
========================= */
function worldCupStage() {
    let total = skill + discipline + fitness;

    if (total >= 15) {
        setStory("You became a LEGEND and won the World Cup!");
    } else if (total >= 10) {
        setStory("You made it far but lost in the finals.");
    } else if (total >= 5) {
        setStory("You had an average career.");
    } else {
        setStory("Your career never reached the top level.");
    }

    setChoices([
        {
            text: "Play Again",
            action: startGameUI
        }
    ]);

    updateStats();
}

document.querySelectorAll(".toggle").forEach(button => {
    button.addEventListener("click", () => {
        button.parentElement.classList.toggle("active");
    });
});