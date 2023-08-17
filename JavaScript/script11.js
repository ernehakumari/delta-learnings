// Call Stack
function hello() {
    console.log("Inside hello function");
    console.log("Hello");
}

function demo() {
    console.log("Call hello function");
    hello();
}

console.log("Calling Demo Function");
demo();
console.log("Done, Bye!");

//  Visualition of call stack
function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();


// JS is a single threaded language (Single execution at single time)

setTimeout(()=> {
    console.log("apne collage");
}, 2000)
console.log("Welcome");


// Callback Hell
let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}
        // callback nesting
changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
        changeColor("brown", 1000, () => {
            changeColor("olive", 1000);
        });
    });
});


// asynchonous function
function savetoDb(data, success, fail) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    } else {
       fail();
    }
}

savetoDb(
    "Hello Everyone",
    () => {
        console.log("Succes1: Your Data Was Saved");
        savetoDb(
            "I am Neha",
            () => {
                console.log("Success2: My Name was also saved!");
            },
            () => {
                console.log("Failure2: I couldn't save my name :(");
            }
        );
    },
    () => {
        console.log("Failuer1: Week Connection! Data not saved");
    }
);


// Promises
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let interNetSpeed = Math.floor(Math.random() * 10) + 1;
        if (interNetSpeed > 4) {
            resolve("Success: Data was saved");
        } else {
            reject("Failure: Week connection");
        }
    });
}

// saveToDb("Software world")
//     .then(() => {
//         console.log("Promis was resolves");
//     })
//     .catch(() => {
//         console.log("Promis was rejected");
//     });



// Promise chaining
/*
saveToDb("Welcome, Dev world")
    .then(() => {
        console.log("data1 saved. Promis was resolved.");
        saveToDb("Learn to code!")
        return saveToDb("Coding world");
    })
    .then(() => {
        console.log("data2 saved. Promis was resolved.")
    })
    .catch(() => {
        console.log("Promise was rejected");
    });
*/

// Result and Error in Promises
saveToDb("Welcome, Dev world")
    .then((result) => {
        console.log("data1 saved. Promis was resolved.");
        console.log("result of promise: ", result);
        return saveToDb("Coding world");
    })
    .then((result) => {
        console.log("data2 saved. Promis was resolved.");
        console.log("result of promise: ", result);
        return saveToDb("Let's do Job!");
    })
    .then((result) => {
        console.log("data3 saved. Promis was resolved.");
        console.log("result of promise: ", result);
    })
    .catch((error) => {
        console.log("Promise was rejected");
        console.log("error of promise: ", error);
    });


// 


