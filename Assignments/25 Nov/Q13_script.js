
let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let changeBgBtn = document.getElementById("changeBgBtn");
let updateTextBtn = document.getElementById("updateTextBtn");
let box = document.getElementById("box");
changeBgBtn.addEventListener("click", function () {
    let colorValue = colorInput.value.trim();
    let test = document.createElement("div");
    test.style.color = colorValue;

    if (test.style.color === "") {
        alert("Invalid color name!");
    } else {
        box.style.backgroundColor = colorValue;
    }
});

updateTextBtn.addEventListener("click", function () {
    let textValue = textInput.value.trim();

    if (textValue === "") {
        alert("Please enter some text!");
        return;
    }
    box.textContent = textValue;
});
