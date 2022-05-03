FUNCTION - PROMPTS


//Greeting User
let myGreeting = function(name) {
    console.log(`Hello ${name}`);
}
myGreeting('Damian');

// Checking type of input
let checkType = function(x) {
    return typeof(x);
}
console.log(checkType(4));

// Sum two numbers
let sum = (x, y) => { return x + y; }

console.log(sum(13, 49));

// Add and Multiply
let result = (a, b, c, d) => { return (a + b) * (c + d); }

console.log(result(5, 2, 6, 4));

// Return larger
function larger(x,y) {
    return Math.max(x,y)
     }
 
   console.log(larger(100,100));

   // Sum of elements
let arr = [1, 2, 3, 4, 5, 6];

let results = arr.reduce((sum, current) => sum + current, 0);

console.log(results);

// Squaring a number
let square = (num) => num * num;

console.log(square(4));

// Odd or Even
let oddOrEven = function(num) {
    if (num % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}
oddOrEven(7);

// Sum of positive
let addPositives = (arr) => {
    return arr.filter(num => num > 0).reduce((a, b) => a + b)
   };
   
   console.log(addPositives([4, 2, 3, -5, 0, -4]));

