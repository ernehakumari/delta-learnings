console.log("Hello World!");
console.log("Welcome to the world of Software");

let a = 10;
let b = 20;
console.log("Sum is: ", a+b);

// Templet literals
    let pencilePrice = 10;
    let erasorPrice = 5;
    // let output = "The total price is : " + (pencilePrice + erasorprice) + " Rupees.";
    let output = `The total price is : ${pencilePrice + erasorPrice} Rupees`;
    console.log(output);

// Operators ibn JavaScript
let num1 = 10;
let num2 = 2;

    // 1. Arithmetic operator
    console.log(`Addition result:${num1 + num2}`);
    console.log(`Substraction result:${num1 - num2}`);
    console.log(`Multiplication result:${num1 * num2}`);
    console.log(`Division result:${num1 / num2}`);
    console.log(`Modulo result:${num1 % num2}`);
    console.log(`Power result:${num1 ** num2}`);

    // 2. Unary Operator
    console.log(a++) ;   // Increment by one
    console.log(b--) ;   // Decrement by one

    // 3. Assignment operator
    b = a;
    console.log(b);

    // 4. Comparision Operator
    let age = 23;
    console.log(age < 18);  //here, age is greater than 18, So it will give false

    // 5. Logical Operator (And [ $$ ]    OR [ || ]    NOT [ ! ] )



// Conditional Statement
    // 1. if statement
    let totPrice = 400;
    if(totPrice >= 399) {
        console.log('Get discount of 75Rupees');
        console.log(`Price after discount will be: ${totPrice - 75}`);
    }

    let name = "Neha";
    if (name == "Neha") {
        console.log(`${name}, Welcome to our website`);
    }
    

    // 2. elseif Statement
    let yourAge = 14;
    if(yourAge >= 18) {
        console.log("You can Vote");
    }
    else if(yourAge < 18) {
        console.log("Your are too young for voting. You can not vote.")
    }


    let marks = 75;
    if(marks >= 80) {
        console.log("Your Grade is : A+");
    }
    else if(marks >= 70) {
        console.log("Your Grade is : A+");    
    }
    else if(marks >= 60) {
        console.log("Your Grade is : A+");    
    }
    else if(marks >= 50) {
        console.log("Your Grade is : A+");    
    }
    else if(marks < 33) {
        console.log("Fail");
    }


    // 3. else statement
    let myAge = 16;
    if (myAge >= 18) {
        console.log("You can Vote");
    }
    else {
        console.log("Too Young To Vote. You Can not Vote");
    }


// Qs) Create a traffice light system that shows what to do based on color.
let color = "Green";
// Traffice light System
if(color === "Red") {
    console.log("Stop!");
}
if(color === "Yellow") {
    console.log("Slow Down");
}
if(color === "Green") {
    console.log("Go");
}


// Qs) Create the system to calculate the price of popcorn, based on the size ordered
let size = 'L';
if(size == 'XL') {
    console.log("Price is Rs.250");
}
else if (size == 'L') {
    console.log('Price is RS.200');
}
else if (size == 'M') {
    console.log('Price is RS.100');
}
else if (size == 'L') {
    console.log('Price is RS.50');
}
else {
    console.log(`Size ${size} Not Available`);
}


// Nested if-else
let finalmarks = 85;
if(finalmarks >= 33) {
    console.log("Pass");
    if(finalmarks >= 80) {
        console.log("Grad : outstanding");
    }
    else {
        console.log("Grad: Good");
    }
}
else {
    console.log("Better Luck next time!");
}



// Qs) A "good string" is a string that starts with the kletter 'a' & has a length>3. Write a Program to find if a string is good or not.
let str = "apple";
if((str[0] === 'a') && (str.length > 3)) {
    console.log("Good String!");
} else {
    console.log("Not a good string!")
}

// Qs) Predict the output of the given code
let num = 12;
if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

// truthy and falsy
let string = ""; // falsy
string = "a";   // truthy
if(string) {
    console.log("truthy: it is a string")
} else {
    console.log("falsy: empty or null value.");
}

// Qs) Use Switch statement to print the dayNum of the week using a number variabl 'day' with value 1 to 7. like 1=Monday 2=Tuesday.....
let dayNum;

switch(3) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`Invalid input ${dayNum}`);
}


// aleart ,  Prompt ,  error and warning

    // //alert
    // alert('Hello World!'); // to show an popup message

    // //prompt
    // console.log(prompt()); // to take input from user

    // // error
    // console.error("please put correct password, to login"); //to show an error message

    // // warning
    // console.warn("this is a warning message")




// Qs) using prompt take firstname and lastname and print on the screen
let fName = prompt("Enter your first name");
let lName = prompt("Enter your last name");
let msg = (`Welcome ${fName} ${lName}`);
alert(msg);


    

