// Array Methods

// 1. forEach
let arr = [1,2,3,4,5];
let print = function(el) {
    console.log(el);
};
arr.forEach(print);


let names = ["John", "Hary", "Roy", "Shreya"];
let printname = function(name) {
    console.log(name);
};
names.forEach(printname);

let studInfo = [
    {
        name: 'John',
        age: 20,
        gender:'male',
    }, 
    {
        name: 'Sarah',
        age: 22,
        gender: 'female'
    }, 
    {
        name: 'Mike',
        age: 21,
        gender:'male'
    }
];

studInfo.forEach((student) => {
    console.log(student.name);
    console.log(student.age);
});

// 2. map
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((el) => {
    return el * 2; // returns a new array with each element multiplied by two
});
console.log("doubled:", double);// Output :[2, 4, 6, 8, 10]

// 3. filter
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter((num) => (num % 2 == 0));
console.log('even:', even)    //Output:[2, 4, 6, 8] (it will only return even value)

// 4. every
console.log( [3,4,6,7,8].every((el) => (el %2 == 0)) );  // output: false
console.log( [4, 8, 10, 12].every((el) => (el %2 == 0)) );  // output: true

// 5. some
console.log( [3,4,6,7,8].some((el) => (el %2 == 0)) );  // output: true
console.log( [1,3,5].some((el) => (el %2 == 0)) );  // output: false

// reduce Method (it reduces the array to a single value, depends on the logic written in that function)
let numArr = [1, 2,, 3,, 4, 5];
let finalVal = numArr.reduce( (res, el) => (res + el) );
console.log("The final value is: ", finalVal);   // output: 15

// Maximum in array (Using reduce method)
let maxNum = [1, 2, 4, 6, 7, 12, 15, 1, 6, 20, 9];
let max = maxNum.reduce( (max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log("Maximum element in this Array is: ", max);


// Qs) Check if all numbers in our array are multiple of 10 or not.
let numsArray = [10, 4, 6, 20, 8, 30 , 40, 50];
let ans = numsArray.every( (el) => (el % 10 == 0) );
console.log("Is all elements in this array divisible of 10 ?  ", ans);

// Qs) Create a function to find the minimum number in an array.
function getMin(arrMin) { 
    let min = arrMin.reduce((min , el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}
let arrMin = [2, 5, 9, 5, 1, 12, 3];
console.log("The minimum element in given array is: ", getMin(arrMin));

// Default Parameters
function sum (a, b=5) {
    return a + b;
}
console.log(sum(6));    // output: 11
console.log(sum(3,5));    // output: 8

// Spread (Expand an iterable into multiple value)
console.log(..."Welcome All!");

let arrSpread = [18, 4, 8, 5, 9, 10, 24];
console.log(Math.min(...arrSpread));
console.log(Math.max(...arrSpread));

// Spread (with Array Literals)
let spradArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = [...spradArr];
console.log(newArray);

let chars = [..."Always Be Happy"];
console.log(chars);

let odds = [1, 3, 5, 7, 9];
let evens = [2, 4, 6, 8, 10];
let oddEven = [...odds, ...evens];
console.log(oddEven);

// Spread (with object literals)
let data = {
    email: "ironman@gmail.com",
    password: "abcd1234",
};
const dataCopy = {...data, id: 1, country: "India" };
console.log(dataCopy);

// Rest
function sum(...args) {
    return args.reduce((sum, el) => (sum + el));
}
console.log("Sum of the given arguments are:", sum(1,4,5,7,8));

// Qs) Create a function that will return the min of given collection of numbers
function min(...arg) {
    return arg.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}
console.log("Minumum number: ", min(1, 4, 5, 7, 8, -20, 3, 10));

// Destructuring
let name = ["tony", "bruce", "steve", "peter"];;
let [winner, runnerup] = name;
console.log(`The winner is:  ${winner}, and runnerup is:  ${runnerup}`);

// Destructuring (with objects)
const student = {
    name: "karan",
    age: 26,
    class: 9,
    subjects: ["Hindi", "English", "Maths", "Science"],
    username: "karan@123",
    password: "abc1"
};
let {username, password } = student;
console.log(`${student.name}'s Username :${username}\nPassword:${password}`);



















 


