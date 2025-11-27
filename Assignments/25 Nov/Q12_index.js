
const ul = document.querySelector("#myList");
const button = document.querySelector("#addButton");

let itemCount = ul.children.length;

button.addEventListener("click", () => {
    itemCount++; 
    const li = document.createElement("li");
    li.textContent = "New Item";

    if (itemCount % 2 === 1) {
        li.style.fontWeight = "bold";
        li.style.color = "blue";
    } else {
        li.style.fontStyle = "italic";
        li.style.color = "red";
    }

    ul.appendChild(li);
});

