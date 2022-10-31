function getComputerChoice () {
    let result = Math.ceil(Math.random() * 3);

    switch (result)
    {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    
}