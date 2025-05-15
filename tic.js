let gameActive = true;
let currentPlayer = "X";
let gameState = ['','','','','','', '', '', ''];
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const statusDisplay = document.getElementById('status');

const winningMessage = function(){
    return  currentPlayer + "'s Wins!";
}

const drawMessage = function(){
    return "Draw";
}
const currentPlayerTurn = function(){
    return "It's " + currentPlayer + "'s turn ";
}

document.querySelectorAll('.block').forEach(function(block){
 block.addEventListener("click",blockClick);
});
document.querySelector('.restart').addEventListener('click', RestartGame);

function blockClick(clickedblockEvent){
    const clickedblock = clickedblockEvent.target;
    const clickedblockIndex = parseInt(clickedblock.getAttribute('data-block-index'));
    if(gameState[clickedblockIndex] !== "" || !gameActive){
        return ;
    }
    BlockPlayed(clickedblock, clickedblockIndex);
    ResultValidation();
} 
function BlockPlayed(clickedblock,clickedblockIndex){
    gameState[clickedblockIndex] = currentPlayer;
    clickedblock.innerHTML = currentPlayer;
}

statusDisplay.innerHTML = currentPlayerTurn();

function PlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}


function ResultValidation(){
    let roundWon = false;
    for(let i = 0; i <=7; i++){
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if(a === '' || b === '' || c === ''){
            continue;
        }
        if(a === b && b === c){
            roundWon= true;
            break;
        }
    }
    if(roundWon){
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if(roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    PlayerChange();
}

function RestartGame() {
 gameActive = true;
 currentPlayer = "X";
 gameState = ['','','','','','', '', '', ''];
 statusDisplay.innerHTML = currentPlayerTurn();
 document.querySelectorAll(".block").forEach(function(block){
    block.innerHTML = "";
 });
}
