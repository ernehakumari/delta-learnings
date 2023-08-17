/*
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis) {
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}
*/


// ToDo App
let btn = document.querySelector("button");
let ul = document.querySelector("ul")
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Remove";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    // console.log(inp.value);
    inp.value = " ";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});
 