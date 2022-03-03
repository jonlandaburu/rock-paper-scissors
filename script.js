listOfPOssibleValues = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerSelection() {
    randonValue = Math.floor(Math.random() * 3);
    return listOfPOssibleValues[randonValue];
};

function playRound(playerSelection, computerSelection) {
    let whoWins = "";
    playerIndex   = listOfPOssibleValues.indexOf(playerSelection);
    computerIndex = listOfPOssibleValues.indexOf(computerSelection);
    deltaIndex = computerIndex - playerIndex;

    if (deltaIndex == 0)                    return `It is a tie! as both selected ${playerSelection}`;
    if (deltaIndex == 1 | deltaIndex == -2) return `You lose! ${computerSelection} beats ${playerSelection}`;
    if (deltaIndex == 2 | deltaIndex == -1) return `You win! ${playerSelection} beats ${computerSelection}`;
}

function getPlayerSelection() {
    let validSelection = false;
    let index;
    while (validSelection == false) {
        let selection = window.prompt('Choose between ROCK, PAPER or SCISSORS: '); 
            selection = selection.toUpperCase().trim();
            index = listOfPOssibleValues.indexOf(selection);
        if (index != -1) validSelection = true;
    }
    return listOfPOssibleValues[index];
}
  
for (let i = 0; i < 5; ++i) {
    let playerSelection   = getPlayerSelection();
    let computerSelection = getComputerSelection();
    let result            = playRound(playerSelection, computerSelection);
    console.log(`Player choose: ${playerSelection}, computer choose: ${computerSelection}: ${result}`);
}