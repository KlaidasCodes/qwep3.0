const testFuntionalityButton = document.getElementById("button1");
const createNewPwManagerButton = document.getElementById("create_json");
const accessPasswordsButton = document.getElementById("access_passwords");
const deletePwManagerButton = document.getElementById("delete_json");
const darkRedButton = document.getElementById("dark_red");
const darkPurpleButton = document.getElementById("dark_purple");
const darkDepressingButton= document.getElementById("depression");




function changingTheme() {
    console.log("The button works well!");
    const body = document.body;
    body.classList.toggle("depressing_theme");
}

testFuntionalityButton.addEventListener("click", changingTheme);

darkRedButton.addEventListener("click", () => {
    document.body.classList.remove("dark_red_theme", "dark_purple_theme", "depressing_theme")
    document.body.classList.add("dark_red_theme");
})

darkPurpleButton.addEventListener("click", () => {
    document.body.classList.remove("dark_red_theme", "dark_purple_theme", "depressing_theme")
    document.body.classList.add("dark_purple_theme");
})

darkDepressingButton.addEventListener("click", () => {
    document.body.classList.remove("dark_red_theme", "dark_purple_theme", "depressing_theme")
    document.body.classList.add("depressing_theme");
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

