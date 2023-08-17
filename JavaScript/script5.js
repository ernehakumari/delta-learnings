// object literal
const student = {
    name: "John",
    age: 25,
    marks: 94.4,
    city: "delhi"
};
console.log(student);

// Create a Post
/* Create an object literal for the properties of thread or twitter post which includes-
    - username
    - content
    - like
    - reposts
    - tags
*/
const post = {
    username: "@neha",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 3,
    tags: ["@codelife", "@delta"]
};
console.log("post:", JSON.stringify(post));

// Get value from object
console.log(post["username"]);  
console.log(post.likes);

//  Add or update value in object literal
const info = {
    name: "Neha",
    age: 21,
    city: "Noida",
    country: "India",
};
console.log(info);
info.age = 22;  // update the value of age
info.gender = "Female"; // to add a new key value pare in existing object
console.log(info);

// Nested object (Object of Objects) (To create object inside the object)
const calssInfo = {
    aman: {
        rollno : 12,
        grade: "A+",
        city: "Delhi"
    },
    rahul:{
        rollno : 32,
        grade: "A",
        city: "Pune"
    },
    Karan:{
        rollno : 24,
        grade: "A+",
        city: "Mumbai"
    },
};
console.log(calssInfo);


// Array of Objects
let studentInfo = [
    {
        name: "Aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "Neha",
        grade: "A",
        city: "Noida"
    },
    {
        name: "Rahul",
        grade: "A+",
        city: "Pune"
    }
];
console.log(studentInfo);
studentInfo[1].gender = "female";
console.log("Updated array:", studentInfo);


// Generate Random Integer (from 1 to 10)
let randomNum = Math.floor(Math.random() * 10) + 1;



// Guessing game
const maxNum = prompt("Enter the maximum number");
const randomNums = Math.floor(Math.random() * maxNum) + 1;
console.log(randomNums);

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("I don't know the number");
        break;
    }

    if(guess == randomNums) {
        console.log("You are right! Congrats!!");
        break;
    } else if(guess < randomNums) {
        guess = prompt("Hint: your guess number was too small. Please try again!");
    } else {
        guess = prompt("Hint: Your guess was too large. Please try again!");
    }
}



