let count = 0;
const win = [[1,2,3], [4,5,6], [7,8,9],
             [1,4,7], [2,5,8], [3,6,9],
             [1,5,9], [3,5,7]
            ];
let arrX = [];// Array to hold all ids that have had their symbols switched
let arrO = [];
let countX = 0;
let countO = 0;
let playXwins = 0;
let playOwins = 0;


// Add X or O
function addSym(id){
    var elem = document.getElementById(id);

    if (elem.innerHTML == "X" || elem.innerHTML == "O"){
        return;
    }

    count++;
    
    if (count % 2 == 0){
        elem.innerHTML = "X";
        // Store element value
        arrX[countX] = elem.getAttribute("value");
        countX++;
        //checkMatch("X");
        //displayPlayerTurn("O");
    }
    else{
        elem.innerHTML = "O";
        // Store element value
        arrO[countO] = elem.getAttribute("value");
        countO++;
        //checkMatch("O");
        //displayPlayerTurn("X");
    }
}


// Check array for match
function checkMatch(val){
    
    for (let i = 0; i < 8; i++){

        if (document.getElementById("button-" + win[i][0]).innerHTML == val){
            if (document.getElementById("button-" + win[i][1]).innerHTML == val){
                if (document.getElementById("button-" + win[i][2]).innerHTML == val){
                    alert("Winner is " + val + "!!");
                    //disableBtns();
                    //displayWinner(val, i);
                }
            }
        }
    }
}