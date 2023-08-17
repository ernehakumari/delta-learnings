// Axios

// WebPage Random Cat facts
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);

    let p = document.querySelector('#result');
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e) {
        console.log("Error - ", e);
        return "No Fact found";
    }
}



// WebPage to create random Dog photos
let btns = document.querySelector('#btn');
let dogUrl = "https://dog.ceo/api/breeds/image/random";

btns.addEventListener("click", async () => {
    let imgLink = await getImage();
    console.log(imgLink);
    let img = document.querySelector('#output');
    img.setAttribute("src", imgLink);
});

async function getImage() {
    try {
        let res = await axios.get(dogUrl);
        return res.data.message;
    } catch (e) {
        console.log("Error : ", e);
        return "No Image Found";
    }
}


// Random Jokes API
const jokesUrl = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { header: {Accept: "application/json"} };
        let res = await axios.get(url, config);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}


// API for Universities details
let detailsUrl = "http://universities.hipolabs.com/search?name=";
let bton = document.querySelector('#button');

bton.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let collArr = getColleges(country);
    console.log(collArr);
});

function show(collArr) {
    let list = document.querySelector('#list');
    list.innerText = "";
    for(col of collArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.log("Error:", err);
        return [];
    }
}



