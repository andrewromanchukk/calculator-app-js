// const calculator = {
//   displayValue: '0',
//   firstOperand: null,
//   waitingForSecondOperand: false,
//   operator: null,
// };

// function inputDigit(digit) {
//   const { displayValue, waitingForSecondOperand } = calculator;
  
//   if(waitingForSecondOperand===true){
//       calculator.displayValue = digit;
//       calculator.waitingForSecondOperand = false;
//   }else{
//     calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//   }
//   console.log(calculator);
// }

// function inputDecimal(dot){
//     //if the displayValue does not contain adecimal point
//     if(!calculator.displayValue.includes(dot)){
//         calculator.displayValue +=dot;
//     }
// }

// function handleOperator(nextOperator){
//     const {firstOperand, displayValue, operator} = calculator;
//     const inputValue = parseFloat(displayValue);

//     if(firstOperand===null){
//         calculator.firstOperand = inputValue;
//     }
//     calculator.waitingForSecondOperand = true;
//     calculator.operator = nextOperator;
// }

// function updateDisplay() {
//   const display = document.querySelector('.calculator-screen');
//   display.value = calculator.displayValue;
// }

// updateDisplay();

// const keys = document.querySelector('.calculator-keys');
// keys.addEventListener('click', (event) => {
//   const { target } = event;
//   if (!target.matches('button')) {
//     return;
//   }

//   if (target.classList.contains('operator')) {
//     handleOperator(target.value);
//     updateDisplay();
//     return;
//   }

//   if (target.classList.contains('decimal')) {
//     inputDecimal(target.value);
// 	updateDisplay();
//     return;
//   }

//   if (target.classList.contains('all-clear')) {
//     console.log('clear', target.value);
//     return;
//   }

//   inputDigit(target.value);
//   updateDisplay();
// });

const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');
const zeroBtn = document.getElementById('calc-zero');

const decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let displayValElement = document.getElementById('calc-display-val');

let displayVal = '0';
let pendingVal;

let evalStringArray = []; 

let calcNumBtns = document.getElementsByClassName('calc-btn-num');
let calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let updateDisplayVal =(clickObj)=>{
    let btnText = clickObj.target.innerText;

    if(displayVal==='0')
        displayVal = "";

        displayVal+=btnText;
        displayValElement.innerText = displayVal;
    

}
let performOperation = (clickObj) =>{
    let operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
           pendingVal = displayVal;
           displayVal = '0'; 
           displayValElement.innerText = displayVal;
           evalStringArray.push(pendingVal);
           evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
           displayVal = '0'; 
           displayValElement.innerText = displayVal;
           evalStringArray.push(pendingVal);
           evalStringArray.push('-');
            break;
        case '*':
           pendingVal = displayVal;
           displayVal = '0'; 
           displayValElement.innerText = displayVal;
           evalStringArray.push(pendingVal);
           evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0'; 
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
             break;
        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(''));
            displayVal = displayVal + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
        default:
            break;
    }
}

for(let i=0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for(let i=0; i<calcOperatorBtns.length; i++){
    calcOperatorBtns[i].addEventListener('click', performOperation,false);
}

clearBtn.onclick = () =>{
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}
backspaceBtn.onclick = () =>{
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal -1);

    if(displayVal==='')
    displayVal ='0'; 
    displayValElement.innerText = displayVal;
}
decimalBtn.onclick = () =>{
    if(!displayVal.includes('.'))
        displayVal += '.';
    displayValElement.innerText = displayVal;
}