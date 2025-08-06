const testFuntionalityButton = document.getElementById("button1");
const createNewPwManagerButton = document.getElementById("create_json");
const accessPasswordsButton = document.getElementById("access_passwords");
const deletePwManagerButton = document.getElementById("delete_json");

function testingButton() {
    console.log("The button works well!");
    changeButtonText();
}

testFuntionalityButton.addEventListener("click", testingButton);


function changeButtonText() {
    testFuntionalityButton.innerText = "The button has been used up...";
}







createNewPwManagerButton.addEventListener("click", () => {
    window.location.href = "create_new_pw_man.html";
})


accessPasswordsButton.addEventListener("click", () => {
    window.location.href = "access_pw_man.html";
})

deletePwManagerButton.addEventListener("click", () => {
    window.location.href = "del_pw_man.html";
})

