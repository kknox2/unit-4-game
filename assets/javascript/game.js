//GLOBAL VARIABLES//

//CRYSTAL VARIABLES//
var crystal = {
    red:
    {
        name: "red",
        value: 0
    },
    clear:
    {
        name: "clear",
        value: 0
    },
    purple:
    {
        name: "purple",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    }
};

//Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;


//FUNCTIONS//

//gets random numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (120 - 19 + 1))
}


//Starts & restarts the Game
var startGame = function () {

    // Resets the Current Score
    currentScore = 0;

    // Sets a new Target score
    targetScore = getRandom(19, 120);


    // sets a different value for each of the crystals
    crystal.red.value = getRandom(1, 12);
    crystal.clear.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);

    //Change HTML to reflect changes//
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    //Testing if it works//
    console.log("---------");
    console.log("Target Score: " + targetScore);
    console.log("Red: " + crystal.red.value + " | Clear: " + crystal.clear.value + " | Purple: " + crystal.purple.value + " | Green: " + crystal.green.value);
    console.log("-----------------")
}

//Respond to clicks on crystals
var addValues = function (crystal) {

    //changes currentScore
    currentScore = currentScore + crystal.value;

    //change the html to show changes in current score
    $("#yourScore").html(currentScore);

    //call the checkWin function
    checkWin();

    //testing console
    console.log("Your Score: " + currentScore);
}

//Check if win or lose and resets the game
var checkWin = function () {

    //check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
        alert("LOSER!");
        console.log("Loser!");

        //add to loss counter
        lossCount++;

        //Change Loss Count HTML
        $("#lossCount").html(lossCount);

        //restart the game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("WINNER!");
        console.log("winner!");

        //add to win counter
        winCount++;

        //Change Win Count HTML
        $("#winCount").html(winCount);

        //restart the game
        startGame();
    }

}

//MAIN PROCESS
//Initializes Game
startGame();

$("#red").click(function () {

    addValues(crystal.red);

});

$("#clear").click(function () {

    addValues(crystal.clear);

});

$("#purple").click(function () {

    addValues(crystal.purple);

});

$("#green").click(function () {

    addValues(crystal.green);

});


