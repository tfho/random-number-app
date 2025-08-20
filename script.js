const randomButton = document.querySelector("#random-btn")
const min = document.querySelector("#min")
const max = document.querySelector("#max")


randomButton.addEventListener(
    "click",
    ()=>{
        document.querySelector("#result").textContent = Math.floor(
            getRandomNumber(Number(min.value),Number(max.value))
        )
    }
)

function getRandomNumber(min, max){
    return Math.random() * (max - min) + min;
}