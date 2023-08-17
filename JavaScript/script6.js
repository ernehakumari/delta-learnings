//  Function
    function hello() {   // function defination
        console.log("Hello World!");
    }
    hello(); // function call

function printName() {
    console.log("I am Neha!")
}
printName();

// Qs) Create a function that print a poem
function printPoem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
    console.log("up above the world so high");
    console.log("like a diamond in the sky.");
}
printPoem();

// Qs) Create a function to roll a dice & always display the value of the dice (1 to6).
function rollDice() {
    let randomNum = Math.floor(Math.random()*6)+1;    // generate number from 1 to 6
    console.log(randomNum);
}
rollDice();

// Function with arguments
    // Print the sum of two number
function sumOfTwo(a, b) {
    sum = a + b;
    console.log(sum);
}
sumOfTwo(2,5);


function printInfo(name, age) {
    console.log(`My name is ${name}, and my age is ${age}`);
}
printInfo("Neha", 21);
printInfo("Aman", 23);

// Qs) Create a function to calculate the average of three numbers
function calAvg(a, b, c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}
calAvg(40,78,90);
calAvg(3, 4, 5);

// Qs) Create a function that prints the table of the given number
function printTable(n) {
    console.log(`print the table of ${n}`);
    for(let i=n; i<=n*10; i+=n) {
        console.log(i) ;
    }
}
printTable(12);

// return keyword (it is use to return some value from function)
function sub(x, y) {
    return x-y;
}
console.log(sub(10,5));   // Output: 5

// Qs) Create a function that will return the sum of number from 1 to n
function getSum(n) {
    let sum = 0;

    for(let i = 1; i<=n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Sum will be: ", getSum(10));

// Qs) Create a function that return the concatenation of all strings in an array.
let str = ["Hi", "Neha", "this", "side", "!"];

function concat(str) {
    let result;
    for(let i=0; i<str.length; i++) {
        result = result + str[i];
    }
    return result;
}
console.log(concat(str));

// Scope
/* Type of scope
    1. Function scope - accessable only inside the function
    2. Block scope - accessable inside a block { }
    3. Lexical scope
    3. Global/File level scope - accessable all over inside a page
*/
// lexical scope
function outerFunc() {
    let x= 5;
    let y = 10;
    function innerFunc() {
        console.log(x)
    }
    innerFunc();
}

// Qs) What will be the output of the following code
let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}
console.log(greet);
changeGreet(); // Output : hello, namaste

// Functions Expressions (it is just a way to write a function using variable) (name less function)
let total = function(a, b) {
    return a + b;
}
console.log(total(3, 4));

// High order function (that will take one or multiple function as arguments)
function multipleGreet(func, n) {    // multipleGreet() is higher order function
    for(i=0 ; i<n ; ++i) {
        func();
    }
}

let welc = function() {
    console.log("Hello");
}
multipleGreet(welc, 2);

// Higher order functions (returns a function)
function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }

    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }

    } else {
        console.log("wrong request");
    }
}


// Methods
const calculator = {
    num: 55,
    add: function(num1, num2) {
        return num1 + num2;
    },
    sub: function(num1, num2) {
        return num1 - num2;
    },
    mul: function(num1, num2) {
        return num1 * num2;
    }
};
console.log(`The sum of ${calculator.add(34,6)}`);
console.log(`The sum of ${calculator.sub(30,15)}`);
console.log(`The sum of ${calculator.mul(6,6)}`);






