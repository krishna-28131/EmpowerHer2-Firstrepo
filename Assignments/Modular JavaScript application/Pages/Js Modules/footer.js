export function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `<p>&copy; 2025 My App</p>`;
    footer.style.marginTop = "20px";
    footer.style.textAlign = "center";
    return footer;
}
