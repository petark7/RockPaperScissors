var scorePlayer = 0;
var scoreComputer = 0;

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
        console.log(`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
    else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        console.log(`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "lose";
    }
        else if (playerSelection == "ROCK" && computerSelection == "SCISSORS")  {
            console.log(`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
      

    if (playerSelection == "PAPER" && computerSelection == "PAPER")   {
        console.log(`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
        else if (playerSelection == "PAPER" && computerSelection == "ROCK")  {
            console.log(`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
        else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            console.log(`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "lose";
        }

    if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")   {
        console.log(`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
        else if (playerSelection == "SCISSORS" && computerSelection == "PAPER")  {
            console.log(`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
        else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            console.log(`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "lose";
        }
}

function game () {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Rock, paper or scissors?");
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
    }

    console.log(`Final score is: player = ${scorePlayer}, computer = ${scoreComputer}`);
    if (scorePlayer > scoreComputer)
    {
        console.log("You won!");
    }
    else if (scoreComputer > scorePlayer) {
        console.log ("You lost :(");
    }
    else {
        console.log ("It's a tie!");
    }
    scorePlayer = 0;
    scoreComputer = 0;
}