// press animation

var level = 0;
var isStarted = false;
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

$(document).keypress(function() {
    if (!isStarted) {
        $("h1").text("Level " + level);
        nextSequence();
    }
    isStarted = true;
});

$("div.btn").click(function () {
    if (isStarted) {
        var userChosenColour = $(this).attr("id");
        animatePress(userChosenColour);
        playSound(userChosenColour);
        userClickedPattern.push(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    new Audio("./sounds/" + name + ".mp3").play();
}

function animatePress(btnColor) {
    $("div#" + btnColor).addClass("pressed");
    setTimeout(function() {
        $("div#" + btnColor).removeClass("pressed")}, 
        100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success")
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence()
            }, 1000);
        }
    }
    else {
        new Audio("./sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")}, 
            200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    isStarted = false;
}
