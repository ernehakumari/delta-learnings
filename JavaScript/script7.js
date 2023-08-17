// this key word
const student = {
    name: "John",
    age: 25,
    gender:'male',
    eng: 90,
    math: 72,
    phy: 60,

    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3
        console.log(`${this.name} got average marks = ${avg}`);
    }
};
console.log(student.getAvg());
console.log(this)  // it will print the window object

// Try & Catch
console.log("Hello");
try {
    console.log(a);
} catch(err) {
    console.log("Variable can't be delcared");
}
console.log("Welcome");

// Miscellaneous Topics

// 1. Arrow Function
const sum = (a, b) => {
    console.log(a+b);
}

const cube = (n) => {
    return n*n*n;
}

// Implicit return in Arrow function (Implicit -> Automatic)
const multi = (a, b) => a * b // Automatic return the multiple of a and b

// Set TimeOut function
console.log("Hi there!");
setTimeout(()=> {
    console.log("Good Morning");
}, 4000);
console.log("Welcome to");

// set Interval function
let id = setInterval(() => {
    console.log("Be Happy!");
}, 2000);
console.log(id);
clearInterval(2);  // clearInterval will stop the execution of setInterval workflow

// this with arrow function
const stud = {
    name: "Neha",
    age : 22,

    getInfo1: function () {
        setTimeout(() => {
            console.log(this);      // student object   (parent's scope)
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () { 
            console.log(this);      // window object
        }, 2000); 
    }, 
};

// Qs) Write an arroe function that return the square of a number n
const square = (n) => n*n;
console.log(square(5));

// Qs) Write a function that prints "Hello World" 5 times at interval of 2s each.
let itsID = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(itsID);
}, 10000);



 