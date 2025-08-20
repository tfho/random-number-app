console.log("Hello")

const randomButton = document.querySelector("#random-btn")

randomButton.addEventListener(
    "click",
    ()=>{
        document.querySelector("#result").textContent = Math.random()
    }
)