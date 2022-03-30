const output = document.createElement('div');
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

const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => {
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
            output.textContent += '+';
            display.appendChild(output);
        }
        else if (input === '1'){
            output.textContent += '1';
            display.appendChild(output);
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
    })
})

