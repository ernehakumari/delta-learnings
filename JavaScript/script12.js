console.log("API's & JSON");

// async function
async function greet() {
    // throw "week connection";
    return "Hello World!";  // return a promise
}

greet()
    .then((result) => {
        console.log("Promis was resolved");
        console.log("result was:", result )
    })
    .catch((err) => {
        console.log("Promis was rejected");
        console.log("error was", err);
    })


// await function
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function numDemo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

numDemo();


// async & await
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("Color Changed!");
        }, delay);
    });
}

async function colorDemo() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("pink", 1000);
    changeColor("brown", 1000);
}

colorDemo();




// JSON
let jsonRes = '{"fact":"Cats purr at the same frequency as an idling diesel engine, about 26 cycles per second.","length":87}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);

let studInfo = {
    name: "Neha",
    roll: 21,
    marks:[85,96]
};
let convInJson = JSON.stringify(studInfo);
console.log(convInJson);


// first API Request (using Fetch)
let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log((res));
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("ERROR -", err);
    });


// First API Request (Using Fetch with async await)
let myUrl = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await fetch(myUrl);
        let data = await res.json();
        console.log(data.fact);
    } catch (e) {
        console.log("error : ", e);
    }

    console.log("Other code");
}


