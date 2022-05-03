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
    if (b === 0){
        return 'ERROR'
    }
    else{
        return a/b;
    }
    
}

function operate(operator, a ,b){
    return operator(a, b);  
}

let btn;
let arrayNum = [];
let operateState = false;
let operator;
let finalOutcome;
let firstNum;
let secondNum;
let num;
let firstOperator;
let operationCount = 0;
const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => { //when button is clicked appends the button text to the display
        let input = button.id;
        
        if (input === '0'){
            btn = 0;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '.'){
            btn = '.';
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '+'){
            arrayNum = [];
            operateState = true;  
            operationCount++;
            
            if (operationCount === 1){
                operator = add;
            }
            else if (operationCount >= 2){
                
                finalOutcome = operate( operator, firstNum, secondNum);
                appendOutput(finalOutcome);
                operator = add;
                operateState = true;
                
            }

        }
        else if (input === '1'){
            btn = 1;
            arrayNum.push(btn);
            num = arrayNum.join('');
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '2'){
            btn = 2;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '3'){
            btn = 3;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '-'){ 
            arrayNum = [];
            operateState = true;
            
            operationCount++;
            if (operationCount === 1){
                operator = subtract;  
            }
            else if (operationCount >= 2){
                  
                finalOutcome = operate( operator, firstNum, secondNum);
                appendOutput(finalOutcome);
                operateState = true;
                operator = subtract;  
            }

        }
        else if (input === '4'){
            btn = 4;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '5'){
            btn = 5;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '6'){
            btn = 6;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '*'){
            arrayNum = [];
            operateState = true;
            operationCount++;
            if (operationCount === 1){
                operator = multiply;  
            }
            else if (operationCount >=2){
                finalOutcome = operate( operator, firstNum, secondNum);
                appendOutput(finalOutcome);
                operateState = true;
                operator = multiply; 
            }
            
        }
        else if (input === '7'){
            btn = 7;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '8'){
            btn = 8;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '9'){
            btn = 9;
            arrayNum.push(btn);
            num = arrayNum.join('');
            
            appendNumbers(btn);
            saveNumbers();
        }
        else if (input === '/'){
            arrayNum = [];
            operateState = true;
            
            operationCount++;

            if (operationCount === 1){
                operator = divide;  
            }
            else if (operationCount >=2){
                finalOutcome = operate( operator, firstNum, secondNum);
                appendOutput(finalOutcome);
                operateState = true;
                operator = divide; 
                
            }
            
        }
        else if (input === 'clear'){
            clear();
        }
        else if (input === 'delete'){
            console.log(input)
        }
        else if (input === '='){
            finalOutcome = operate( operator, firstNum, secondNum);
            appendOutput(finalOutcome);
        }

    })
})
const output = document.createElement('div');
output.classList.add('output');
const display = document.querySelector('.display')
//test
function appendNumbers(btn){
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
    if (finalOutcome === 'ERROR'){
        clear();
        finalOutcome = undefined;
    }
}

function saveNumbers(){
    if (operationCount >= 2){
        firstNum = finalOutcome;
        secondNum = Number(output.textContent)
    }
    else if (operationCount === 1){
        secondNum = Number(output.textContent);
    }
    else if (operationCount === 0){
        firstNum = Number(output.textContent);
    }
}

function appendOutput(finalOutcome){
    output.textContent = '';
    display.appendChild(output);
    operateState = false;
    output.textContent += finalOutcome;
    display.appendChild(output);
}

function clear(){
    output.textContent = '';
    display.appendChild(output);
    operateState = false;
    firstNum = undefined;
    secondNum = undefined;
    operationCount = 0;
}