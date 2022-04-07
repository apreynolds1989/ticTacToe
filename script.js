const board = document.querySelector('#board');
let cells = [];
let activeButton;
let winner = '';
// Function to increase turn counter
let turnCounter = 1;
const nextTurn = () => turnCounter++;
let reset = document.querySelector('.restartButton');

createGame();
reset.addEventListener('click', () => {
    restartGame();
});

//Will create 9 divs, each with class of cell and id of cell+i, appended to div#board, each cell will have a button appended to it with a class of btn+i. All new cells will be pushed to the cells array to be compared by another function
function createGame() {
    for (let i = 0; i < 9; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.id = 'cell' + i;
        let newButton = document.createElement('button');
        newButton.classList.add('btn' + i);
        board.appendChild(newCell);
        newCell.appendChild(newButton);
        cells.push(newCell);
    };
    activateButtons();
};

//Begin creating active buttons

// Loop through each button and apply the Event Listener to each individual button, setting he active button to a variable that can be selected in the clickButton function and disables the button

function activateButtons() {
    const buttons = document.querySelectorAll('button[class^="btn"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            activeButton = button;
            clickButton();
            button.disabled = true;
        });
    });
};

// Function for clicking a button and showing result, selects the closest cell class to add the desired choice to. If a winner has been found, label the winner Cell and show the winner otherwise next turn
function clickButton() {
    let closestCell = activeButton.closest('.cell');
    if (turnCounter % 2 === 0) {
        closestCell.classList.add('circle');
        setCellValueCircle();
        checkWinnerCircle();
    } else {
        closestCell.classList.add('x');
        setCellValueX();
        checkWinnerX();
    };
    if (winner === 'x' || winner === 'circle') {
        labelWinnerCell();
        showStuff();
    }
    nextTurn();
};

//Function to create a comparable cell value for x's
function setCellValueX() {
    for (i = 0; i < 9; i++) {
        if (activeButton.classList.contains('btn' + i)) {
            cells[i] = 'x';
        };
    };
};
//Function to set a comparable cell value for circles 
function setCellValueCircle() {
    for (i = 0; i < 9; i++) {
        if (activeButton.classList.contains('btn' + i)) {
            cells[i] = 'circle';
        };
    };
};

//Create functions to check win conditions. If the case is true, will set value of winner variable to 'x' or 'circle'

function checkWinnerX() {
    switch (true) {
        case (cells[0] === 'x' && cells[0] === cells[1] && cells[1] === cells[2]):
            winner = 'x';
            break;
        case (cells[3] === 'x' && cells[3] === cells[4] && cells[4] === cells[5]):
            winner = 'x';
            break;
        case (cells[6] === 'x' && cells[6] === cells[7] && cells[7] === cells[8]):
            winner = 'x';
            break;
        case (cells[0] === 'x' && cells[0] === cells[3] && cells[3] === cells[6]):
            winner = 'x';
            break;
        case (cells[1] === 'x' && cells[1] === cells[4] && cells[4] === cells[7]):
            winner = 'x';
            break;
        case (cells[2] === 'x' && cells[2] === cells[5] && cells[5] === cells[8]):
            winner = 'x';
            break;
        case (cells[0] === 'x' && cells[0] === cells[4] && cells[4] === cells[8]):
            winner = 'x';
            break;
        case (cells[2] === 'x' && cells[2] === cells[4] && cells[4] === cells[6]):
            winner = 'x';
            break;
        default:
            winner = false;
            break;
    };
};

function checkWinnerCircle() {
    switch (true) {
        case (cells[0] === 'circle' && cells[0] === cells[1] && cells[1] === cells[2]):
            winner = 'circle';
            break;
        case (cells[3] === 'circle' && cells[3] === cells[4] && cells[4] === cells[5]):
            winner = 'circle';
            break;
        case (cells[6] === 'circle' && cells[6] === cells[7] && cells[7] === cells[8]):
            winner = 'circle';
            break;
        case (cells[0] === 'circle' && cells[0] === cells[3] && cells[3] === cells[6]):
            winner = 'circle';
            break;
        case (cells[1] === 'circle' && cells[1] === cells[4] && cells[4] === cells[7]):
            winner = 'circle';
            break;
        case (cells[2] === 'circle' && cells[2] === cells[5] && cells[5] === cells[8]):
            winner = 'circle';
            break;
        case (cells[0] === 'circle' && cells[0] === cells[4] && cells[4] === cells[8]):
            winner = 'circle';
            break;
        case (cells[2] === 'circle' && cells[2] === cells[4] && cells[4] === cells[6]):
            winner = 'circle';
            break;
        default:
            winner = false;
            break;
    };
};

//Function to assign the winning style to the winner div, showing the winner and disabling the buttons so the game cannot be played again until restarted
let labelWinner = document.querySelector('.winnerCell');

function labelWinnerCell() {
    if (winner === 'x') {
        labelWinner.classList.add('x');
        disableButtons();
    } else if (winner === 'circle') {
        labelWinner.classList.add('circle');
        disableButtons();
    };
};

function unlabelWinnerCell() {
    if (winner === 'x') {
        labelWinner.classList.remove('x');
    } else if (winner === 'circle') {
        labelWinner.classList.remove('circle');
    };
};

//Function to show Winner text
function showStuff() {
    document.querySelector('.winner').style.display = 'flex';
};

function hideStuff() {
    document.querySelector('.winner').style.display = 'none';
};

//Function that can be called to remove buttons when necessary, selects all buttons with a class starting with 'btn' loops through each one and disables it
function disableButtons() {
    let gameButtons = document.querySelectorAll("button[class^='btn']");
    gameButtons.forEach(gameButton => {
        gameButton.disabled = true;
    });
};

function restartGame() {
    unlabelWinnerCell();
    winner = '';
    turnCounter = 1;
    hideStuff();
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    cells = [];
    createGame();
}