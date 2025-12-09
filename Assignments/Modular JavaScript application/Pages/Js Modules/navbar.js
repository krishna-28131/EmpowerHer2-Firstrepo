export function createNavbar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <a href="index.html">Home</a> |
        <a href="signup.html">Signup</a> |
        <a href="login.html">Login</a> |
        <a href="todos.html">Todos</a>
    `;
    nav.style.marginBottom = "20px";
    return nav;
}

