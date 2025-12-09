import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.body.prepend(createNavbar());
document.body.appendChild(createFooter());

const form = document.getElementById('loginForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'todos.html';
    } else {
        alert('Invalid credentials');
    }
});
