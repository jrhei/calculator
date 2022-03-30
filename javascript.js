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
        console.log(button.id);
    })
})