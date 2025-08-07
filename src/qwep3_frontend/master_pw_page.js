console.log("the second js loaded")


const enteredPassword = document.getElementById("master_pw");
const submitMasterPwButton = document.getElementById("pw_done");
const textToChange = document.getElementById("master");


submitMasterPwButton.addEventListener("click", () => {
    var masterPassword = enteredPassword.value;
    if (masterPassword.length < 1) {
        textToChange.innerText = "Please enter a valid password";    
    } else {
        textToChange.innerText = "Password entered: " + masterPassword;        
    }
    enteredPassword.value = "";
})


