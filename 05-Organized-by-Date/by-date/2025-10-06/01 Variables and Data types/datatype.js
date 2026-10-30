let a = 7;

let str = "umesh"

let bool = false

let b;


console.log(typeof(a),typeof(str),typeof(bool),typeof(b))

let num = 616;

let original = num;

let temp = 0;

while(num > 0){

    let rem = num % 10;

    temp = rem + (temp*10)

    num = Math.floor(num/10)

}

let arr = [1, 3, 4, 6, 7, 8];
let found = false;

for (let num1 of arr) {
  if (num1 === 6) {
    console.log("Good");
    found = true;
    break;
  }
}

if (!found) {
  console.log("Not good");
}



{
    const  b = 99;
    console.log(b)
}


let big = 8888888.33333;
console.log(typeof(big))


