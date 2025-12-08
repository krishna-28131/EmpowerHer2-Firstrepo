
//       FETCH & STORE TODOS     //

async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    // Store only first 20
    const firstTwenty = todos.slice(0, 20);
    storeTodos(firstTwenty);

    renderTodos();
}

function storeTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getStoredTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

//        RENDER TODOS UI        //

function renderTodos() {
    const container = document.getElementById("todoContainer");
    const todos = getStoredTodos();

    if (todos.length === 0) {
        container.innerHTML = "<p>No Todos Available</p>";
        return;
    }

    container.innerHTML = "";

    todos.forEach(todo => {
        const div = document.createElement("div");
        div.className = "todo-item";

        div.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}">
                ${todo.title}
            </span>
            <div>
                <button onclick="toggleComplete(${todo.id})">
                    ${todo.completed ? "Undo" : "Complete"}
                </button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;

        container.appendChild(div);
    });
}

//      DELETE A TODO ITEM       //

function deleteTodo(id) {
    let todos = getStoredTodos();
    todos = todos.filter(todo => todo.id !== id);
    storeTodos(todos);
    renderTodos();
}

//   TOGGLE COMPLETION STATUS    //

function toggleComplete(id) {
    const todos = getStoredTodos();

    const updated = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    storeTodos(updated);
    renderTodos();
}

//       INIT APP ON LOAD        //

window.onload = () => {
    if (!localStorage.getItem("todos")) {
        fetchTodos();
    } else {
        renderTodos();
    }
};
