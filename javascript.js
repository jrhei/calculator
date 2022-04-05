let addState = subtractState = multiplyState = divideState = false;
let addPrecedence = subPrecedence = mulPrecedence = divPrecedence = true;
let twoNum;
let firstIteration = 0;
const output = document.createElement('div');
const previousOutput = document.createElement('div');
previousOutput.classList.add('previousOutput');
output.classList.add('output');
const display = document.querySelector('.display')
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a/b;
}

function operate(operator, a ,b){
    return operator(a, b);  
}

let currentOperator;
let operateState = false;
let btn;
let firstNumberArr = [];
let secondNumberArr = [];
let currentProcedure = 'present';
let firstNumber;
let secondNumber;
let beginAtSecond = 0;
let clearState = false;
let justCleared = false;
const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => { //when button is clicked appends the button text to the display
        let input = button.id;
        
        if (input === '0'){
            btn = '0';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '.'){
            btn = '.';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '+'){
            clear(operateState);
            currentOperator = '+';
            firstNumberArr = [];
            secondNumberArr = [];
            currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);      
            addState = true;
            operateState = true;
            beginAtSecond++;


            
        }
        else if (input === '1'){

            btn = '1';
            saveNumbers(btn);
            appending(btn);
            
            
        }
        else if (input === '2'){
            btn = '2';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '3'){
            btn = '3';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '-'){
            clear(operateState);
            currentOperator = '-';
            firstNumberArr = [];
            secondNumberArr = [];
            currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);      
            subtractState = true;
            operateState = true;
            beginAtSecond++;

            

        }
        else if (input === '4'){
            btn = '4';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '5'){
            btn = '5';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '6'){
            btn = '6';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '*'){
            clear(operateState);
            currentOperator = '*';
            firstNumberArr = [];
            secondNumberArr = [];
            currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);      
            multiplyState = true;
            operateState = true;
            justCleared = false;
            beginAtSecond++;


            
            
        }
        else if (input === '7'){
            btn = '7';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '8'){
            btn = '8';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '9'){
            btn = '9';
            saveNumbers(btn);
            appending(btn);
        }
        else if (input === '/'){
            clear(operateState);
            currentOperator = '/';
            firstNumberArr = [];
            secondNumberArr = [];
            currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);      
            divideState = true;
            operateState = true;
            beginAtSecond++;



            
        }
        else if (input === 'clear'){
            clearState = true;

        }
        else if (input === 'delete'){
            console.log(output.textContent)
        }
        else if (input === '='){
            //currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);      
            operateState = true;
            justCleared = false;
            beginAtSecond++
            
        }
        if (clearState === true){

            previousOutput.textContent = '';
            output.textContent = '';
            display.insertBefore(previousOutput, output);
            display.appendChild(output);
            firstNumber = Number();
            secondNumber = Number();
            clearState = false;
            operateState = false;
            justCleared = true;
            currentOperator = '';
            currentProcedure = 'present';
            beginAtSecond = 0;
            
        }
        else{
            if (operateState === true && beginAtSecond >= 2 && justCleared == false)
                {
                    if (addState === true)
                    {
                        firstNumber = operate(add, firstNumber, secondNumber);
                        currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);
                        addState = false;
                        
                    }
                    else if (multiplyState === true ){
                        firstNumber = operate(multiply, firstNumber, secondNumber);
                        currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);
                        multiplyState = false;
                    }
                    else if (subtractState === true){
                        firstNumber = operate(subtract, firstNumber, secondNumber);
                        currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);
                        subtractState = false;
                    }
                    else if (divideState === true ){
                        firstNumber = operate(divide, firstNumber, secondNumber);
                        currentProcedure = appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator);
                        divideState = false;
                    }
                    
                }

            }
    })
})


function appending(btn){
    if (operateState){
        output.textContent = '';
        display.appendChild(output);
        operateState = false;
        output.textContent += btn;
        display.appendChild(output);
    }
    else{
        output.textContent += btn;
        display.appendChild(output);
    }
}
function clear(operateState){
    if (operateState === true){
        output.textContent = '';
        display.appendChild(output);
        operateState = false;   
    }
}
function saveNumbers(btn){
    if (currentProcedure === 'present'){
        firstNumberArr.push(btn);

        firstNumber = Number(firstNumberArr.join(''));
        
    }
    else if (currentProcedure === 'past'){
        secondNumberArr.push(btn);

        secondNumber = Number(secondNumberArr.join(''));
        justCleared = false;
        
    }
}
function appendBefore(currentProcedure, firstNumber, secondNumber, currentOperator){
    if (currentProcedure === 'present' && clearState === false){
        output.textContent = '';
        previousOutput.textContent = firstNumber + ' ' + currentOperator;
        output.textContent = firstNumber;
        display.insertBefore(previousOutput, output);
        display.appendChild(output);
        //currentProcedure = 'past';
        return 'past'
    }
    else if (currentProcedure === 'past' && clearState === false){
        output.textContent = '';
        previousOutput.textContent = secondNumber + ' ' + currentOperator;
        output.textContent = secondNumber;
        display.insertBefore(previousOutput, output);
        display.appendChild(output);
        //currentProcedure = 'present';
        return 'present';
    }
}