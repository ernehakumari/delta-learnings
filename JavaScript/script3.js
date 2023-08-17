// String Methods
// 1. trim()
let msg = "     Hello    ";
let finalMsg = msg.trim();
console.log(finalMsg);

// let password = prompt("Set your Password");
// let newPassword = password.trim();
// console.log(newPassword);


// 2. toUpperCase()     &     3. toLowerCase()
let str = " Hello Everyone, I am Neha.";
let upperStr = str.toUpperCase(); // convert all characters in the string into uppercase letters
console.log(upperStr);
let lowerStr = str.toLowerCase(); // converts all characteres of a given string into lowercase letter
console.log(lowerStr)


// String Mehtod with "Argument"
// 1. indexof
let message = "ILoveCoding";
let charIndex = message.indexOf('o');   // returns position where 'o' is present
console.log(charIndex);

// Method Chaining
let sentence = "       Hello Everyone     ";
let newSent = sentence.toUpperCase().trim();
console.log(newSent);// Output: HELLO EVERYONE

// 2. slic()
let comment = "ILoveCoding";
let slicMsg = comment.slice(1, 5);
console.log(comment); // output: Love
console.log(comment.slice(5)); // output: Coding
console.log(comment.slice(-4)) // 11 - 4 = 7 (output: ding)

// 3. replace()  & repeat()
console.log(comment.replace("Love", "Do")); // output: IDoCoding 
console.log(comment.repeat(2));    // output: ILoveCodingILoveCoding



// PracticeQs
// Qs1) Trim it and convert it to uppercase
let say = "help!"
console.log(say.trim().toUpperCase());


// Arrry (Data Structure)
let student = ["aman", "neha", "rahul", "roy"];
console.log(student[1]);
console.log(student.length);


// Arrays are Mutable
let fruits = ["mango", "banana", "apple"];
console.log(fruits);
fruits[0] = "guava";
console.log(fruits);

// Array Methods
let cars = ['audi', 'BMW', 'xuv', 'maruti'];
console.log(cars);
// 1. push  (add to end)
cars.push('toyota');
cars.push('ferrari');
console.log(cars);
// 2. pop   (removes last element from array)
cars.pop();
console.log(cars);
// 3. unshift      (adds an item at the beginning of a list/array.)
cars.unshift('volvo') ;
console.log(cars);
// 4. shift        (remove first element in array )
cars.shift();
console.log(cars);


// Qs) Change the given array  from start to final position
    // start: ["january", "july", "march", "august"];
    // end: ["july", "june", "march", "august"];
let months = ["january", "july", "march", "august"];
console.log("start state of array months: ", months);
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log("final state of array months: ", months);

// Array methods (indexOf & includes methods)
console.log(cars.indexOf("BMW"));
console.log(cars.includes("maruti"));

// Array Methods (concat & reverse)
    // concat
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
let allColors = primary.concat(secondary);
console.log(allColors);
    // reverse
primary.reverse();
console.log(primary);

// Array Methods (slice)
let colors = ["red", "yellow", "orange", "white" , "black"];
let colorsSlice = colors.slice(-2);
console.log(colorsSlice);
colorsSlice = colors.slice(2);
console.log(colorsSlice);

// Array Methods (sort)
let square = [25, 16, 4, 49, 36, 9]
console.log(square.sort());

let days = ["Monday", "Friday", "Tuesday", "Wednesday"];
console.log(days.sort()); // sort on the basis of ascending order alplabatical order


// Qs) Change the given array  from start to final position
    // start: ["january", "july", "march", "august"];
    // end: ["july", "june", "march", "august"];

let month =  ["january", "july", "march", "august"];
month.splice(0, 2, "july", "june");
console.log(month);

// Qs) Return the index of the "javascript" from the given array, if it was reversed.
    //  ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']
let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
let fResult = lang.reverse().indexOf("javascript");
console.log(fResult);

// nested Array
let nums = [ [1,2], [3,4], [5,6], [7,8], [10,20]];
console.log("lenght of the nums array is: ", nums.length);
console.log(nums[2][1]);

// Qs) Create a nested array to show the following tic-tac-toe game state
/*  x |   | 0
      | X | 
    0 |   | X
*/
let game = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X'] ];
console.log('Tic Tac Toe Game State:',game );
game[0][1] = "O";
console.log('\nAfter making move at row=0 and col=1 : ', game );









