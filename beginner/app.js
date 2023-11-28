const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');

function Add(){
    let result;
    if(num1.value == '' || num2.value == ''){
        alert("Please enter a number");
    } else {
        result = parseInt(num1.value) + parseInt(num2.value);
        console.log(result);
        document.querySelector('#result').innerHTML= `Result: ${result}`;
    };
} 
function Subtract(){
    let result;
    if(num1.value == '' || num2.value == ''){
        alert("Please enter a number");
    } else {
        result = parseInt(num1.value) - parseInt(num2.value);
        console.log(result);
        document.querySelector('#result').innerHTML= `Result: ${result}`;
    };
} 
function Multiply(){
    let result;
    if(num1.value == '' || num2.value == ''){
        alert("Please enter a number");
    } else {
        result = parseInt(num1.value) * parseInt(num2.value);
        console.log(result);
        document.querySelector('#result').innerHTML= `Result: ${result}`;
    };
} 
function Divide(){
    let result;
    if(num1.value == '' || num2.value == ''){
        alert("Please enter a number");
    } else {
        result = parseInt(num1.value) / parseInt(num2.value);
        console.log(result);
        document.querySelector('#result').innerHTML= `Result: ${result}`;
    };
} 