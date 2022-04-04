// Create Array of cells
const board = document.querySelector('#board');
const cells = [];

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

// Function to increase turn counter
let turnCounter = 1;
const nextTurn = () => turnCounter++;

//Begin creating active buttons
const buttons = document.querySelectorAll('button');
// Loop through each button and apply the Event Listener to each individual button, setting he active button to a variable that can be selected in the clickButton function and disables the button
let activeButton;
buttons.forEach(button => {
    button.addEventListener('click', event => {
        activeButton = button;
        clickButton();
        button.disabled = true;
    });
});

//Function to create a comparable cell value for x's
function setCellValueX() {
    for (i = 0; i < 9; i++) {
        if (activeButton.classList.contains('btn' + i)) {
            cells[i] = 'x';
            console.log(cells);
        };
    };
};
//Function to set a comparable cell value for circles 
function setCellValueCircle() {
    for (i = 0; i < 9; i++) {
        if (activeButton.classList.contains('btn' + i)) {
            cells[i] = 'circle';
            console.log(cells);
        };
    };
};
// Function for clicking a button and showing result, selects the closest cell class to add the desired choice to
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
    nextTurn();
};

let winner = '';

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
        case (cells[2] === 'x' && cells[2] === cells[5] && cells[5] === cells[7]):
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
    console.log(winner);
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
        case (cells[2] === 'circle' && cells[2] === cells[5] && cells[5] === cells[7]):
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
    console.log(winner);
};