// Printing a message
console.log("Umesh Kumar JB");

// Variable declarations
let a = 55;
var b = 77;
const c = 88; // 'const' means this value cannot be changed

// Block 1
{
    let a = 8888; // New 'a' created only inside this block
    console.log("Inside block (a):", a);
}

// Outside block
console.log("Outside block (a):", a);

// 'var' can be redeclared
var b = 888;
const d = 33; // New constant variable

// Block 2
{
    var b = 888; // This affects global 'b' because 'var' is not block-scoped
    console.log("Inside block (b):", b);
}

// Outside block
console.log("Outside block (b):", b);


