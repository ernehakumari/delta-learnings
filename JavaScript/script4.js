// 1. for loop (Used to iterate a piece of code)
    // forward loop
for(let i=1; i<=5; i++) {
    console.log("Hello World"); // prints "Hello World" 5 times
}

    // backward loop
for(let j=5; j>=1; j--) {
    console.log(j);
}

// Qs) Print all Odd Numbers (from 1 to 15)
for(let n=1; n<=15; n++) {
    console.log(n);
}

// Qs) Print all Even Number (from 2 to 10)
for(let e=2; e<=10; e=e+2) {
    console.log(e);
}

// Qs) Print the multiplication of table for 5
/*
let tNum = prompt("Write your number");
tNum = parseInt(tNum);
console.log("Table of", tNum);
for(let t=1; t<=10; t++) {
    console.log(tNum, "X", t , "=", tNum*t );
}
*/

    // another logic to print the table of given number
    /*
    console.log("Table of", tNum);
    for(let j = tNum; j<=tNum*10; j= j + tNum) {
        console.log(j);
    }
    */

// Nested Loop
for(let x= 1; x<=3; x++) {
    for(let y=1; y<=3; y++) {
        console.log(y);
    }
}


// 2. while loop
console.log("while Loop")
let z =1;
while (z <= 5) {
    console.log(z);
    z++
}

// Favorite Movie (Create a movie guess game)
/*
let favMovie = "avatar";
let guess = prompt("Guess my favorite movie");
while((guess != favMovie)) {
    if(guess == "quit") {
        console.log("You quit the game.");
        break;
    }
    guess = prompt("Wrong guess. Please try again!");
}
if(guess == favMovie) {
    console.log("Correct ", favMovie, " is my favorite movie.");
}
*/


// break Keyword
let b = 1;
while(b<=5) {
    if(b == 3) {
        break;
    }
    console.log(b);
    b++;
}
console.log("We use break at 3");

// loops with Arrays
    // forward printing
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
console.log("print in forward");
for(let m=0; m<fruits.length; m++) {
    console.log(m + ":"+ fruits[m]); // prints index and value of array "fruits"
}

    // backward printing
console.log("print in backward");
for(let p=fruits.length-1 ; p>=0; p--) {
    console.log(p + ":"+ fruits[p]);
}



// loop with nested array
let heroes = [
    ["ironman", "spiderman", "thor"], 
    ["superman", "wonder woman", "flash"]
];
console.log("\nPrinting all Heroes:");
for (let h=0; h<heroes.length; h++) {
    console.log(h, heroes[h], heroes[h].length);
    for (let k = 0; k <heroes[h].length; k++){
        console.log(`k=${k}, ${heroes[h][k]}`);
    }
}

// for-of loop
let fruit = ["mango", "apple", "banana", "litchi", "orange"];
for(i of fruit) {
    console.log(i);
}

for(char of "ApnaCollage") {
    console.log(char);
}


// Nested for-of loop
let superHeroes = [
    ["ironman", "spiderman", "thor"], 
    ["superman", "wonder woman", "flash"]
];
for(list of superHeroes) {
    // console.log(list);
    for(hero of list) {
        console.log(hero);
    }
}


// ToDo App (only JS)
let todo = [];
let req = prompt("Please enter your request");

while(true) {
    if(req == "quit") {
        console.log("App Closed");
        break;
    }

    if(req == "list") {
        console.log("_______________");
        for(let t=0; t<todo.length; t++) {
            console.log(t, todo[t]);
        }
        console.log("_______________");
    } 
    else if(req == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Your task is added to the list");
    }
    else if(req == "delete") {
        let idx = prompt("Please enter the task index you want to delete");
        todo.splice(idx, 1);
        console.log("Task deleted from list");
    }
    else {
        console.log("Wrong request");
    }

    req = prompt("Please enter your next request");
}





