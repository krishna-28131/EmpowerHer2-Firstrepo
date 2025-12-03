
// Select DOM elements

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const todoList = document.getElementById("todoList");

// Load tasks from localStorage

let tasks = JSON.parse(localStorage.getItem("todos")) || [];

// Function to save tasks to localStorage

function saveTasks() {
    localStorage.setItem("todos", JSON.stringify(tasks));
}

// Render tasks on screen

function renderTasks(filterText = "") {
    todoList.innerHTML = "";

    tasks
        .filter(task => task.text.toLowerCase().includes(filterText.toLowerCase()))
        .forEach(task => {
            const taskDiv = document.createElement("div");

            // Task text
            const span = document.createElement("span");
            span.textContent = task.text;

            // Apply completed style
            if (task.completed) span.classList.add("completed");

            // Mark complete button
            const completeBtn = document.createElement("button");
            completeBtn.textContent = task.completed ? "Undo" : "Done";
            completeBtn.onclick = () => {
                task.completed = !task.completed;
                saveTasks();
                renderTasks(searchInput.value);
            };

            // Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => {
                tasks = tasks.filter(t => t.id !== task.id);
                saveTasks();
                renderTasks(searchInput.value);
            };

            taskDiv.appendChild(span);
            taskDiv.appendChild(completeBtn);
            taskDiv.appendChild(deleteBtn);

            todoList.appendChild(taskDiv);
        });
}

// Add new task

addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Task cannot be empty!");
        return;
    }

    const newTask = {
        id: Date.now(), 
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks(searchInput.value);

    taskInput.value = ""; 
});

// Real-time search

searchInput.addEventListener("input", () => {
    renderTasks(searchInput.value);
});

// Initial render on page load

renderTasks();
