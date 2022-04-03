// Function to increase turn counter
let turnCounter = 1;
const nextTurn = () => turnCounter++;

// Function for clicking a button and showing result, selects the closest cell class to add the desired choice to
function clickButton() {
    let closestCell = activeButton.closest('.cell');
    if (turnCounter % 2 === 0) {
        closestCell.classList.add('circle');
    } else {
        closestCell.classList.add('x');
    };
    nextTurn();
};

//Select all buttons with id starting with 'btn'
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