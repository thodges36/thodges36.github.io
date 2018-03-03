$(document).ready(function () {

    //Variables used throughout game
    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var userSelect;

    //Array of messages
    var messages = {
        correct: "Congratulations, you got the right answer!",
        incorrect: "That's not the correct answer.",
        endTime: "Time's up!",
        finished: "Let's see how you did..."
    };

    //Array of trivia questions
    var triviaQuestions = [
        {
            question: "What is the southernmost state capital city of the USA?",
            answerList: ["Sacramento",
                "Honolulu",
                "Tallahassee",
                "Austin"],
            answer: 1,
            answerText: "Honolulu is the correct answer"
        },

        {
            question: "Which US state capital city is the closest to the national capital city of the USA?",
            answerList: ["Annapolis",
                "Richmond",
                "Dover",
                "Baltimore"],
            answer: 0,
            answerText: "Annapolis is the correct answer."
        },
        {
            question: "What is the northernmost US state capital that has the word 'city' in its name?",
            answerList: ["Salt Lake City",
                "Carson City",
                "Oklahoma City",
                "Jefferson City"],
            answer: 0,
            answerText: "Salt Lake City is the correct answer."
        },

        {
            question: "What is the easternmost US state capital that has the word 'city' in its name?",
            answerList: ["Salt Lake City",
                "Carson City",
                "Oklahoma City",
                "Jefferson City"],
            answer: 3,
            answerText: "Jefferson City is the correct answer."
        },

        {
            question: "What is the the southernmost state capital city of the contiguous United States?",
            answerList: ["Baton Rouge",
                "Austin",
                "Jackson",
                "Tallahassee"],
            answer: 1,
            answerText: "Austin is the correct answer."
        },

    ];


    // FUNCTIONS

    //This captures user click on start button to create a new game
    $("#start").on("click", function () {
        $(this).hide();
        newGame();
    });


    //This function sets up the page for a new game emptying all areas and showing game area
    function newGame() {
        $("#gameCol").show();
        $("#finalMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#unanswered").empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }

    //This function displays the next question
    function newQuestion() {
        $("#message").empty();
        $("#correctedAnswer").empty();
        answered = true;

        //This function displays the new question
        $("#currentQuestion").html("Question " + (currentQuestion + 1) + " of " + triviaQuestions.length);
        $(".question").html(triviaQuestions[currentQuestion].question);

        //This function displays the new questions's answer options in multiple choice type
        for (var i = 0; i <= 5; i++) {

            var choices = $("<div>");
            choices.text(triviaQuestions[currentQuestion].answerList[i]);
            choices.attr({ "data-index": i });
            choices.addClass("thisChoice");
            $(".answerList").append(choices);
        }

        //This sets the timer
        countdown();

        //When user clicks on n answer this will pause the time and display the correct answer to the question 
        $(".thisChoice").on("click", function () {
            userSelect = $(this).data("index");
            clearInterval(time);
            answerPage();
        });
    }

    //This function is for the timer countdown
    function countdown() {
        seconds = 15;
        $("#timeLeft").html("00:" + seconds);
        answered = true;
        //Sets a delay of one second before the timer starts
        time = setInterval(showCountdown, 1000);
    }

    //This function displays the countdown
    function showCountdown() {
        seconds--;

        if (seconds < 10) {
            $("#timeLeft").html("00:0" + seconds);
        } else {
            $("#timeLeft").html("00:" + seconds);
        }

        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    //This function takes the user to the answer page after the user selects an answer or timer runs out
    function answerPage() {
        $("#currentQuestion").empty();
        $(".thisChoice").empty();
        $(".question").empty();
    

        var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
        var rightAnswerIndex = triviaQuestions[currentQuestion].answer;  

        //This checks to see if user choice is correct, incorrect, or unanswered
        if ((userSelect == rightAnswerIndex) && (answered === true)) {
            correctAnswer++;
            $('#message').html(messages.correct);
        } else if ((userSelect != rightAnswerIndex) && (answered === true)) {
            incorrectAnswer++;
            $('#message').html(messages.incorrect);
        } else {
            unanswered++;
            $('#message').html(messages.endTime);
            answered = true;
        }

        if (currentQuestion == (triviaQuestions.length - 1)) {
            setTimeout(scoreboard, 6000);
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 6000);
        }
    }

    //This fucntion displays all the game stats
    function scoreboard() {
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
  

        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);

    }

});
