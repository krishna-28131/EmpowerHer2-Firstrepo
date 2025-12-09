export function displayTodos(todos) {
    const container = document.getElementById('todosContainer');
    container.innerHTML = '';

    todos.forEach(todo => {
        const div = document.createElement('div');
        div.style.border = '1px solid #ccc';
        div.style.margin = '5px';
        div.style.padding = '10px';
        div.textContent = `${todo.title} - ${todo.completed ? '✅' : '❌'}`;
        container.appendChild(div);
    });
}
