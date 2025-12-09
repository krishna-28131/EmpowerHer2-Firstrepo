import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { displayTodos } from './displayTodos.js';

document.body.prepend(createNavbar());
document.body.appendChild(createFooter());

// Check login
const user = localStorage.getItem('loggedInUser');
if (!user) {
    alert('Please login first');
    window.location.href = 'login.html';
}

// Fetch todos
fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
    .then(data => {
        displayTodos(data);
    })
    .catch(err => console.error(err));
