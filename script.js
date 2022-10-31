function getComputerChoice () {
    let result = Math.ceil(Math.random() * 3);

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

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "ROCK")   {
        console.log(`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
        else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS"))  {
            console.log(`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
        else if ((playerSelection == "ROCK" && computerSelection == "PAPER")) {
            console.log(`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "lose";
        }

    if (playerSelection == "PAPER" && computerSelection == "PAPER")   {
        console.log(`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
        else if ((playerSelection == "PAPER" && computerSelection == "ROCK"))  {
            console.log(`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
        else if ((playerSelection == "PAPER" && computerSelection == "SCISSORS")) {
            console.log(`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "lose";
        }

    if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")   {
        console.log(`It's a tie! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
        return "tie";
    }  
        else if ((playerSelection == "SCISSORS" && computerSelection == "PAPER"))  {
            console.log(`You won! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "win";
        }
        else if ((playerSelection == "SCISSORS" && computerSelection == "ROCK")) {
            console.log(`You lost! You chose ${playerSelection}, and the computer chose ${computerSelection}.`);
            return "lose";
        }
}