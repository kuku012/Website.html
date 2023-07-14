function confirmBet(color) {
    var confirmationPopup = document.getElementById("confirmation-popup");
    confirmationPopup.classList.remove("hidden");

    var confirmButton = document.getElementById("confirm-button");
    confirmButton.onclick = function() {
        placeBet(color);
        confirmationPopup.classList.add("hidden");
    };

    var cancelButton = document.getElementById("cancel-button");
    cancelButton.onclick = function() {
        confirmationPopup.classList.add("hidden");
    };
}

function placeBet(color) {
    var button = document.getElementById(color);
    button.disabled = true;

    var resultElement = document.getElementById("result");
    resultElement.innerText = "You placed a bet on " + color;
    resultElement.classList.remove("hidden");
}
var buttonsLocked = false;
var countdownInterval;

function startCountdown() {
    var timerElement = document.getElementById("timer");
    var countdown = 5;

    countdownInterval = setInterval(function() {
        timerElement.innerText = countdown;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            handleResult();
            resetGame();
        }

        countdown--;
    }, 1000);
}

function resetGame() {
    var buttons = document.getElementsByClassName("color-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("locked");
        buttons[i].disabled = false;
    }

    var resultElement = document.getElementById("result");
    resultElement.classList.add("hidden");

    startCountdown();
}

function handleResult() {
    var randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
    var colors = ["red", "green", "blue"];
    var randomColor = colors[randomNumber];

    var resultElement = document.getElementById("result");
    resultElement.innerText = "The result is " + randomColor;
    resultElement.classList.remove("hidden");
}

function confirmBet(color) {
    if (!buttonsLocked) {
        var confirmationPopup = document.getElementById("confirmation-popup");
        confirmationPopup.classList.remove("hidden");

        var confirmButton = document.getElementById("confirm-button");
        confirmButton.onclick = function() {
            placeBet(color);
            confirmationPopup.classList.add("hidden");
        };

        var cancelButton = document.getElementById("cancel-button");
        cancelButton.onclick = function() {
            confirmationPopup.classList.add("hidden");
        };
    }
}

function placeBet(color) {
    buttonsLocked = true;
    var buttons = document.getElementsByClassName("color-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("locked");
        buttons[i].disabled = true;
    }

    var resultElement = document.getElementById("result");
    resultElement.innerText = "You placed a bet on " + color;
    resultElement.classList.remove("hidden");
}

// Start the game
startCountdown();
