// Function to increase turn counter
let turnCounter = 1;
const nextTurn = () => turnCounter++;

// Function for clicking a button and showing result
function clickButton() {
    const element = document.querySelector(cell);
    if (turnCounter % 2) {
        element.classList.add('circle');
    } else {
        element.classList.add('x');
    };
    nextTurn();
};

//Select all buttons with id starting with 'btn'
const buttons = document.querySelectorAll('button[id^=btn]');

// Loop through each button and apply the Event Listener to each individual button
buttons.forEach(button => {
    button.addEventListener('click', event => {
        clickButton();
    });
});