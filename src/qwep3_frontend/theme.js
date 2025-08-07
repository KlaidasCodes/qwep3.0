function setThemeName(newThemeName) {
    const body = document.body;
    body.classList.remove("dark_red_theme", "dark_purple_theme", "depressing_theme", "default");
    body.classList.add(newThemeName);
}


function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    setThemeName(savedTheme);
}

window.addEventListener('pageshow', loadTheme);
