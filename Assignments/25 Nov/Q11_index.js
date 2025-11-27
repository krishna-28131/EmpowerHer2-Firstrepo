
let heading = document.getElementById("mainHeading");
heading.textContent = "Welcome to the DOM World!";

let paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

let containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
