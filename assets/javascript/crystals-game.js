$(document).ready(function () {

    //Setting up variables to be used throughout
    var targetNumber = 0;
    var pinkJewel = 0;
    var blueJewel = 0;
    var yellowJewel = 0;
    var greenJewel = 0;


    //Calls the targetNumber (between 19 and 120).
    function targetNumberGenerator() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        console.log("Target number is " + targetNumber);

        // Set the target number container to show the targetNumber.
        $("#target-number-container").html( targetNumber);
    }

    //Functions to generator random number for the jewels (between 1 and 12)
    function pinkJewelGenerator() {
        pinkJewel = Math.round(Math.random() * 12) + 1;
        console.log("Pink jewel is: " + pinkJewel);
    }

    function blueJewelGenerator() {
        blueJewel = Math.round(Math.random() * 12) + 1;
        console.log("Blue jewel is: " + blueJewel);
    }

    function yellowJewelGenerator() {
        yellowJewel = Math.round(Math.random() * 12) + 1;
        console.log("Yellow jewel is: " + yellowJewel);
    }

    function greenJewelGenerator() {
        greenJewel = Math.round(Math.random() * 12) + 1;
        console.log("Green jewel is: " + greenJewel);
    }


    //Call the functions to start game
    targetNumberGenerator();
    pinkJewelGenerator();
    blueJewelGenerator();
    yellowJewelGenerator();
    greenJewelGenerator();

    //Variable for total scores, wins, losses
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //On click event for Pink Jewel
    $("#pink-jewel").on("click", function () {
        totalScore = pinkJewel + totalScore;
        console.log("Score is: " + totalScore)
        $("#total-score").html(totalScore);

        //If correctly hits number, get a win and restart
        if (totalScore === targetNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
            alert("You won!");
        }

        // If not, you lose 
        if (totalScore >= targetNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
            alert("You lost!");
        }
    })

    //On click event for Blue Jewel
    $("#blue-jewel").on("click", function () {
        totalScore = blueJewel + totalScore;
        console.log("Score is: " + totalScore)
        $("#total-score").html(totalScore);

        //If correctly hits number, get a win and restart
        if (totalScore === targetNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }

        // If not, you lose 
        if (totalScore >= targetNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }
    })
    //On click event for Yellow Jewel
    $("#yellow-jewel").on("click", function () {
        totalScore = yellowJewel + totalScore;
        console.log("Score is: " + totalScore)
        $("#total-score").html(totalScore);

        //If correctly hits number, get a win and restart
        if (totalScore === targetNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }

        // If not, you lose 
        if (totalScore >= targetNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }
    })
    //On click event for Green Jewel
    $("#green-jewel").on("click", function () {
        totalScore = greenJewel + totalScore;
        console.log("Score is: " + totalScore)
        $("#total-score").html(totalScore);

        //If correctly hits number, get a win and restart
        if (totalScore === targetNumber) {
            wins = wins + 1;
            $("#wins").html(wins);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }

        // If not, you lose 
        if (totalScore >= targetNumber) {
            losses = losses + 1;
            $("#losses").html(losses);
            targetNumberGenerator();
            pinkJewelGenerator();
            blueJewelGenerator();
            yellowJewelGenerator();
            greenJewelGenerator();
            totalScore = 0;
            $("#totalScore").html(totalScore);
        }
    })

})