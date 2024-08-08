const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let currentInput = "";

let appendNumber = (number) => {
    currentInput += number;
    updateDisplay();
}

let updateDisplay = () => {
    display.value = currentInput;
}

function deleteOne() {
    currentInput = currentInput.substring(0, currentInput.length - 1);
    updateDisplay();
}

buttons.forEach((button) => {
    button.addEventListener(("click"), (e) => {
        let value = e.target.dataset.value;

        if (value === "C") {
            currentInput = "";
            display.value = "";
        } else if (value === "=") {
            display.value = eval(currentInput);
            currentInput = display.value;
        } else if (value === "del") {
            deleteOne();
        } else {
            appendNumber(value);
        }
    });
});