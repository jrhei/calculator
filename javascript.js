let addState = subtractState = multiplyState = divideState = false;
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
let firstlength = 0;
let stopHere = 0;
let length = 0;
let currentOperator;
let operateState = false;
let btn;
const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => { //when button is clicked appends the button text to the display
        let input = button.id;
        
        console.log(input);
        if (input === '0'){
            output.textContent += '0';
            display.appendChild(output);
        }
        else if (input === '.'){
            output.textContent += '.';
            display.appendChild(output);
        }
        else if (input === '+'){
            //output.textContent += '+';
            firstlength = length;
            currentOperator = '+';
            //previousOutput.textContent = result + ' ' + currentOperator;
            /*
            if (addState === true){
                console.log(output.textContent);
                let firstNumArr = [];
                let secondNumArr = [];
                let toArr = output.textContent.split('');
                console.log(toArr);
                for (i = 0; i <= firstlength - 2; i++){
                    firstNumArr[i] = toArr[i];
                }
                let firstNum =Number(firstNumArr.join(''));
                console.log( 'firstnum: ' + firstNum);
                for (i = stopHere; i <= length; i++){
                    secondNumArr[i] = toArr[i];
                }
                let secondNum = Number(secondNumArr.join(''));
                console.log( 'second: ' + secondNum);*/
            
            let firstNumArr = [];
            let secondNumArr = [];
            let toArr = output.textContent.split('');
            console.log(toArr);
            for (i = 0; i <= firstlength - 1; i++){
                firstNumArr[i] = toArr[i];
            }
            console.log(firstNumArr);
            let firstNum = Number(firstNumArr.join(''));
            console.log(firstNum + ' this is 1st');
            output.textContent = '';
            previousOutput.textContent = firstNum + ' ' + currentOperator;
            output.textContent = firstNum;
            display.insertBefore(previousOutput, output);
            display.appendChild(output);
            addState = true;
            //stopHere = length;
            console.log('stop here' + stopHere);
            operateState = true;
            
        }
        else if (input === '1'){
            /*
            if (operateState){
                output.textContent = '';
                display.appendChild(output);
                operateState = false;
                output.textContent += '1';
                display.appendChild(output);
            }
            else{
                output.textContent += '1';
                display.appendChild(output);
            }*/
            btn = '1';
            appending(btn);
            
            
        }
        else if (input === '2'){
            output.textContent += '2';
            display.appendChild(output);
        }
        else if (input === '3'){
            output.textContent += '3';
            display.appendChild(output);
        }
        else if (input === '-'){
            output.textContent += '-';
            display.appendChild(output);
        }
        else if (input === '4'){
            output.textContent += '4';
            display.appendChild(output);
        }
        else if (input === '5'){
            output.textContent += '5';
            display.appendChild(output);
        }
        else if (input === '6'){
            output.textContent += '6';
            display.appendChild(output);
        }
        else if (input === '*'){
            output.textContent += '*';
            display.appendChild(output);
        }
        else if (input === '7'){
            output.textContent += '7';
            display.appendChild(output);
        }
        else if (input === '8'){
            output.textContent += '8';
            display.appendChild(output);
        }
        else if (input === '9'){
            output.textContent += '9';
            display.appendChild(output);
        }
        else if (input === '/'){
            output.textContent += '/';
            display.appendChild(output);
        }
        else if (input === 'clear'){
            output.textContent = '';
            display.appendChild(output);
        }
        else if (input === 'delete'){
            console.log(output.textContent)
        }
        else if (input === '='){
        /*    
            let result;
            console.log('test');
            secondLength = length;
            if (addState === true){
                console.log(output.textContent);
                let firstNumArr = [];
                let secondNumArr = [];
                let toArr = output.textContent.split('');
                console.log(toArr);
                for (i = 0; i <= firstlength - 2; i++){
                    firstNumArr[i] = toArr[i];
                }
                let firstNum =Number(firstNumArr.join(''));
                console.log( 'firstnum: ' + firstNum);
                for (i = stopHere; i <= length; i++){
                    secondNumArr[i] = toArr[i];
                }
                let secondNum = Number(secondNumArr.join(''));
                console.log( 'second: ' + secondNum);
                result = operate(add, firstNum, secondNum);
            }
            console.log(result);
            output.textContent = result;
            display.appendChild(output);
            previousOutput.textContent = result + ' ' + currentOperator;
            display.insertBefore(previousOutput, output);
            length--;*/
        }
        length++;
        console.log('length: ' + length)
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
