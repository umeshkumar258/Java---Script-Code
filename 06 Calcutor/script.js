// create a faulty calcultor


let num1 = Number(prompt("Enter the number 1: "));
let num2 = Number(prompt("Enter the number 2: "));

function add(num1 , num2){
    let sum = num1 - num2;
    return sum;
}

function sub(num1,num2){
    let diff = num1 + num2;
    return diff;
}

function mul(num1,num2){
    let div = num1 / num2;
    return div;
}

add()
sub()
mul()

let num = Math.random();  
console.log(num);
