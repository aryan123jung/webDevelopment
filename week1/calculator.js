// let currentInput = "";
// let operator = null;
// let previousInput = null;

// function clearDisplay() {
//     currentInput = "";
//     operator = null;
//     previousInput = null;
//     updateDisplay("0");
// }

// function inputNumber(number) {
//     currentInput += number;
//     updateDisplay(currentInput);
// }

// function inputOperation(op) {
//     if (currentInput === "") return;
//     operator = op;
//     previousInput = currentInput;
//     currentInput = "";
// }

// function calculateResult() {
//     if (operator === null || previousInput === null || currentInput === "") return;

//     const num1 = parseFloat(previousInput);
//     const num2 = parseFloat(currentInput);
//     let result;

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num2 !== 0 ? num1 / num2 : "Error";
//             break;
//     }

//     currentInput = result.toString();
//     operator = null;
//     previousInput = null;
//     updateDisplay(currentInput);
// }

// function updateDisplay(value) {
//     document.getElementById("display").textContent = value;
// }
const display = document.getElementById("display");
display.textContent = "";

function AddToDisplay(input){
    display.textContent += input ;
}

function Clear(){
    display.textContent = "";
}

function Calculator(input){
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "error";
    }
}
function Remove(){
    display.textContent = display.textContent.slice(0, -1);
}