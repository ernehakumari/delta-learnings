// Events in JS

// 1. onclick
/*
let btn = document.querySelector("button");
console.log(btn);
btn.onclick = function() {
    console.log('clicked');
};
*/

// 2. onmouseover
    /*
    let btns = document.querySelectorAll("button");
    for (btn of btns) {
        btn.onmouseenter = function() {
            console.log("Your Post has been Liked!");
        };
        console.dir(btn);
    }
    */

// Event Listener
/*
    let btns = document.querySelectorAll("button");

    for(btn of btns) {
        btn.addEventListener("click", greet);
        btn.addEventListener("click", know);

    } 

    function greet() {
        alert("Welcome!");
    }

    function know() {
        alert("This is tech world, Be alert!");
    }
*/



// Activity (Generate Random Color)
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector(".box");
    div.style.backgroundColor = randomColor;
    console.log("Color Updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}



// Eventn Listner for element
let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("Para Was Read.")
});

// this in event listeners
let bton = document.querySelector(".btn1");
 bton.addEventListener("click", function() {
    console.dir(this);
    console.log(this.innerText);
    this.style.backgroundColor = "yellow";
});

// Keyboard events
    // keydowm, keyUp, 
let inp = document.querySelector("input");
let btns = document.querySelector(".btn2");

inp.addEventListener("keydown", function (event) {
    console.log(event.key);
    console.log(event.code);

    console.log("code =", event.code);
    if(event.code == "ArrowUp") {
        console.log("Character move forward");
    } else if (event.code == "ArrowDown") {
        console.log("Character Move Backward.");
    } else if (event.code == "ArrowLeft") {
        console.log("Character Move Left.");
    } else if (event.code == "ArrowRight") {
        console.log("Character Move Right.");
    } 
});

btns.addEventListener("click", function() {
    console.log("Input submit");
});


// Form Events & Extracting form data
let form = document.querySelector("form");

from = addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form Submitted");

    let user = document.querySelector("#user");
    let passwrd = document.querySelector("#pass");

    alert(`Hi! ${user.value}, Your password is set to ${passwrd.value}`);
});


// Some more inp events (change event     &     input event)
  // My text editor (Activity)
let inform = document.querySelector("#text");
let textArea = document.querySelector(".textArea");

inform.addEventListener("input", function() {
    console.log(inform.value);
    textArea.innerText = inform.value;
});



// Qs) 2.Practice 
let button = document.querySelector("#color");
button.addEventListener("click", function () {
    console.log("Color changed to green");
    this.style.backgroundColor="green";
});






