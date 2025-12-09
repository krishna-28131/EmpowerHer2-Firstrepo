import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.body.prepend(createNavbar());
document.body.appendChild(createFooter());

const form = document.getElementById('signupForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === username)) {
        alert('User already exists');
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
    window.location.href = 'login.html';
});
