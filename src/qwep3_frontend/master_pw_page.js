console.log("the second js loaded")


const enteredPassword = document.getElementById("master_pw");
const submitMasterPwButton = document.getElementById("pw_done");
const textToChange = document.getElementById("master");


submitMasterPwButton.addEventListener("click", () => {
    var masterPassword = enteredPassword.value;
    textToChange.innerText = masterPassword;
    enteredPassword.value = "";
})


