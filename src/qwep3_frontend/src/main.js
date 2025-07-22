import { qwep3_backend } from "../../declarations/qwep3_backend"


document.getElementById("button1").addEventListener("click", async () => {
    console.log("the frontend is connected!");
    await qwep3_backend.testButton();
})



// still doesn't connect to the backend, gotta figure out this shiiiiit