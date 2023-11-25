let totalMoves = 0;
// Array containing all possible win cases
const possWins = [[1,2,3], [4,5,6], [7,8,9],
             [1,4,7], [2,5,8], [3,6,9],
             [1,5,9], [3,5,7]
            ];
let xMoves = [];
let oMoves = [];
let countX = 0;
let countO = 0;
let playXwins = 0;
let playOwins = 0;


// User makes a move
function userMove(boardBtn){
    // Grab button of the user's move
    var playerMove = document.getElementById(boardBtn);

    // Don't allow user to click taken move
    if (playerMove.innerHTML == "X" || playerMove.innerHTML == "O"){
        return;
    }

    totalMoves++;

    // Calcuate player turn
    if (totalMoves % 2 == 0){ // X turn
        playerMove.innerHTML = "X";
        // Store player move
        xMoves[countX] = playerMove.getAttribute("value");
        countX++;
        // Check if player won
        checkIfWin("X");
        // Display next player's turn
        displayPlayerTurn("O");
    }
    else{ // O turn
        playerMove.innerHTML = "O";

        oMoves[countO] = playerMove.getAttribute("value");
        countO++;

        checkIfWin("O");
        displayPlayerTurn("X");
    }
}


// Determine if there is a winning match
function checkIfWin(playerSym){
    let isWinner = false;

    // Cycle through all potential win cases
    for (let winCase = 0; winCase < 8; winCase++){

        // Comparing players current moves to all possible win cases
        if (document.getElementById("num-" + possWins[winCase][0]).innerHTML == playerSym){
            if (document.getElementById("num-" + possWins[winCase][1]).innerHTML == playerSym){
                if (document.getElementById("num-" + possWins[winCase][2]).innerHTML == playerSym){ // There is a winner
                                    
                    // Apply winner case
                    displayWinner(playerSym, winCase);
                    isWinner = true;

                    // Disallow any further moves after declared winner
                    disableBtns();
                    break;
                }
            }
        }
    }
    // If no winner announce tie
    if (totalMoves == 9 && isWinner == false){
        alert("No winner!");
    }
}


// Declare winner and update score
function displayWinner(winner, winPattern){
    // Declare winner
    alert("Winner is " + winner + "!!");
    // Display the win pattern
    highlightWinn(winPattern);

    // Increment winning player score
    if (winner == "O"){
        playOwins += 1;
        document.getElementById("o-wins").innerHTML = ("O wins: " + playOwins);
    }
    else if (winner == "X"){
        playXwins += 1;
        document.getElementById("x-wins").innerHTML = ("X wins: " + playXwins);
    }
}

// Determine player turn
function displayPlayerTurn(player){
    document.getElementById("player-turn").innerHTML = player + "'s turn";
}


// Highlight winner's win pattern
function highlightWinn(winPattern){
    if (winPattern == 99){ // Reset color because new game
        for (let i = 1; i < 10; i++){
            document.getElementById("num-" + i).style.color = "black";
        }
    }
    else{ // Highlight win pattern
        for (let i = 0; i < 3; i++){
            document.getElementById("num-" + possWins[winPattern][i]).style.color = "green";
        }
    }
}


// Disable all buttons after a win
function disableBtns(){
    for (let i = 1; i < 10; i++){
        document.getElementById("num-" + i).disabled = true;
    }
}


// Enable all buttons upon game reset
function enableBtns(){
    for (let i = 1; i < 10; i++){
        document.getElementById("num-" + i).disabled = false;
    }
}


// Function reset to reset the gameboard, count, countX, countO, xMoves, oMoves
function reset(){
    let btns = ["num-1", "num-2", "num-3",
                "num-4", "num-5", "num-6",
                "num-7", "num-8", "num-9"];

    // Reset board
    for(let cnt = 0; cnt <= 8; cnt++){
        elem = document.getElementById(btns[cnt]);

        if(elem.innerHTML != cnt+1){
            elem.innerHTML = "";
        }
    }

    // Reset arrays & counts
    xMoves = [];
    oMoves = [];
    countO = 0;
    countX = 0;
    totalMoves = 0;

    // Reset buttons
    enableBtns();
    highlightWinn(99);

    //document.getElementById("win-state").innerHTML = "";
}