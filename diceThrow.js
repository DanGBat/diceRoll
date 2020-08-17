
// FUNCTION TO CHOOSE A RANDOM NUMBER BETWEEN 1-6 AND ADD IT TO THE END OF THE PNG FILE NAME
function throwDice() {
    let randomLeftDice = Math.floor(Math.random()*5) +1;
    let randomRightDice = Math.floor(Math.random()*5) +1;

    document.getElementById("leftDice").src ="images/dice" + randomLeftDice + ".png";
    document.getElementById("rightDice").src ="images/dice" + randomRightDice + ".png";

    let totalOfDice = randomLeftDice + randomRightDice;

    document.getElementById("userMessage").innerHTML = (`YOU ROLLED A TOTAL OF ${totalOfDice}`);
}

// FUNCTION TO PLAY THE DICE ROLL SOUND WHEN CALLED
function playDiceRoll(path) {
    new Audio(path).play();
}

