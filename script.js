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

// Button click Event Listener
const wrapper = document.querySelector('wrapper');

/* wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    clickButton();
}); */
const buttons = document.querySelectorAll('button[id^=btn]');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        clickButton();
    });
});