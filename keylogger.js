// Store key counts
let keyCounts = {};
let typedString = "";

// Listen for key presses
window.addEventListener("keyup", function(event) {
    let key = event.key;

    // Normalize space key
    if (key === " ") key = "Space";

    // Update count
    keyCounts[key] = (keyCounts[key] || 0) + 1;

    // Track typed string
    typedString += key.toLowerCase();
    if (typedString.length > 20) typedString = typedString.slice(-20);

    // Display counts in console
    console.clear();
    console.log("Key Counts:");
    for (let k in keyCounts) console.log(k + ": " + keyCounts[k]);

    // STYLE TRIGGERS
    if (keyCounts["Space"] === 5) document.body.style.backgroundColor = "#f0f0f0";
    if (keyCounts["g"] === 10) {
        let message = document.createElement("h2");
        message.textContent = "GOAL!";
        message.style.textAlign = "center";
        document.body.appendChild(message);
    }
    if (keyCounts["Enter"] === 3) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    if (typedString.includes("win")) document.body.style.backgroundColor = "green";
});