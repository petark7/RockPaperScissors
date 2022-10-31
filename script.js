var scorePlayer = 0;
var scoreComputer = 0;

var results = document.getElementById("results");
var score = document.getElementById("score");
var gameResults = document.getElementById("gameResults");

score.textContent = 0;
function getComputerChoice () {
    let result = Math.ceil(Math.random() * 3); //3 is the max number

    switch (result)
    {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS"
            break;
    }
}


// Plays a round and returns either tie, win or lose (to be used iin game funct)
function playRound (playerSelection, computerSelection) {

    if (playerSelection == "ROCK" && computerSelection == "ROCK")   {
        results.innerText = (`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        results.innerText =(`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "lose";
    }
        else if (playerSelection == "ROCK" && computerSelection == "SCISSORS")  {
            results.innerText = (`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
      

    if (playerSelection == "PAPER" && computerSelection == "PAPER")   {
        results.innerText = (`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
        else if (playerSelection == "PAPER" && computerSelection == "ROCK")  {
            results.innerText = (`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
        else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            results.innerText = (`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "lose";
        }

    if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")   {
        results.innerText = (`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER")  {
            results.innerText = (`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            results.innerText = (`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "lose";
        }
}

function game (userInput) {
        let computerChoice = getComputerChoice(); // wrote variable not to get different result each time if is called
        let results = playRound(userInput.toUpperCase(), computerChoice);
        
        if (results == "win")
        {
            scorePlayer += 1;

        }
        else if (results == "lose")
        {
            scoreComputer += 1;
        }

        score.textContent = `Player ${scorePlayer} : ${scoreComputer} Computer`;

        if (scorePlayer == 5 || scoreComputer == 5) {
        console.log(`Final score is: player = ${scorePlayer}, computer = ${scoreComputer}`);
        if (scorePlayer > scoreComputer)
        {
            gameResults.textContent = ("You won!");
        }
            else if (scoreComputer > scorePlayer) {
                gameResults.textContent = ("You lost :(");
            }
            else {
                gameResults.textContent = ("It's a tie!");
            }
    }
}

function buttonClick (userInput) {
    game (userInput);
}