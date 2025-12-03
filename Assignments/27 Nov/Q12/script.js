// Select the container where paragraphs will be added
const container = document.getElementById("container");

// Select buttons
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
    // 1. Create a new <p> element
    const para = document.createElement("p");

    // 2. Add text content to the paragraph
    para.textContent = "This is a new paragraph.";

    // 3. Append paragraph to the container
    container.appendChild(para);
});


removeBtn.addEventListener("click", function () {
    // Get the last paragraph inside the container
    const lastPara = container.lastElementChild;

    // Remove only if there is a paragraph
    if (lastPara) {
        container.removeChild(lastPara);
    }
});
