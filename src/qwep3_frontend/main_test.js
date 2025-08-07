const testFuntionalityButton = document.getElementById("button1");
const createNewPwManagerButton = document.getElementById("create_json");
const accessPasswordsButton = document.getElementById("access_passwords");
const deletePwManagerButton = document.getElementById("delete_json");
const darkRedButton = document.getElementById("dark_red");
const darkPurpleButton = document.getElementById("dark_purple");
const darkDepressingButton= document.getElementById("depression");


localStorage.setItem("theme", "default_theme");

function changingTheme() {
    console.log("The button works well!");
    const body = document.body;
    body.classList.toggle("depressing_theme");
}

testFuntionalityButton.addEventListener("click", changingTheme);

// just realized how ugly the following lines are, will need to create one function that is
// reusable instead of multiple identical ones

darkRedButton.addEventListener("click", () => {
    localStorage.setItem("theme", "dark_red_theme");
    loadTheme();
})

darkPurpleButton.addEventListener("click", () => {
    localStorage.setItem("theme", "dark_purple_theme");
    loadTheme();
})

darkDepressingButton.addEventListener("click", () => {
    localStorage.setItem("theme", "depressing_theme");
    loadTheme();
})


createNewPwManagerButton.addEventListener("click", () => {
    window.location.href = "create_new_pw_man.html";
})


accessPasswordsButton.addEventListener("click", () => {
    window.location.href = "access_pw_man.html";
})

deletePwManagerButton.addEventListener("click", () => {
    window.location.href = "del_pw_man.html";
})


function setThemeName(newThemeName) {
    const body = document.body;
    body.classList.remove("dark_red_theme", "dark_purple_theme", "depressing_theme", "default");
    body.classList.add(newThemeName);
}


function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    setThemeName(savedTheme);
}




