console.log("Hello World!");

// Selecting element by ID
let imgObj = document.getElementById("mainImg");
console.log(imgObj);

// Selectiong elemnt by ClassName
let oldImgs = document.getElementsByClassName("oldImg");
console.log(oldImgs);

// select Element by TagName
let paras = document.getElementsByTagName("p");
console.log(paras);

// Query Selector
    // Allow us to use any CSS selector
console.dir( document.querySelector("h1") ); // select the first h1 element
console.dir( document.querySelector("#description") ); //  select first element with ID
console.dir( document.querySelector("div a") ); // select first a tag inside div



// setting or changing content in object
    // 1. innerText     2. innerHTML        3. textContent
let para = document.querySelector('p');
console.dir(para.innerText);
console.dir(para.innerHTML);

let heading = document.querySelector('h1');
heading.innerHTML = `<u>${heading.innerText}</u>`;

// manipulating Attributes (1. getter       2. setter)

// Manipulate Style
let head = document.querySelector('h1');
heading.style.color = 'purple';

    // change the color of all anchor tag using dom manipulation
    let links = document.querySelectorAll(".box a");
    for(let i=0; i < links.length; i++) {
        links[i].style.color = "brown";
    }

// classList property
let heads = document.querySelector('h1');
console.dir(heads.classList);// return an array-like list of classes on this element

// Navigation on page
let h4 = document.querySelector('h4');
console.dir(h4.parentElement);

// Adding element on the page
let newP = document.createElement('p');
newP.innerText = "Hi, I am Neha. And I am a Software Developer.";
console.dir(newP);
let body = document.querySelector('body');
body.appendChild(newP);





/* Qs) Add the following elements to the container using only JavaScript and DOM methods.
1) a <p> with red text that says "hey I'm red!"
2) an <h3> with blue text that says "I'm a blue h3!"
3) a <div> with a blank border and pink background color with the following elements inside of it: -> another <h1> that says "I'm in a div"
              -> a <p> that says "ME TOO!"
*/

// let para1 = document.createElement("p");
// para1.innerText = "hey I'm red!";
// document.querySelector("body").append(para1);
// para1.classList.add("red");

// let heading = document.createElement("h3");
// heading.innerText = "I'm a blue h3!";
// document.querySelector("body").append(heading);
// heading.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");
// h1.innerText = "I'm in a div";
// para2.innerText ="ME TOO!" ;
// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector("body").append(div);














