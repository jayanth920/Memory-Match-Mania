//DECLARATIONS
const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time")
const startButton = document.getElementById("start")
const restartButton = document.getElementById("restart")
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result")
const controls = document.querySelector(".controls-container");
let cards
let interval
let firstCard = false
let secondCArd = false

//PICTURES ARRAY
const items = [
    {name:"pizza",image:"images/pizza.jpeg"},
    {name:"hotdog",image:"images/hotdog.jpeg"},
    {name:"burrito",image:"images/burrito.jpeg"},
    {name:"tacos",image:"images/tacosjpeg"},
    {name:"burger",image:"images/burger.jpeg"},
    {name:"sandwich",image:"images/sandwich.jpeg"},
    {name:"fries",image:"images/fries.jpeg"},
    {name:"strawberry",image:"images/strawberry.jpeg"},
    {name:"watermelon",image:"images/watermelon.jpeg"},
    {name:"apple",image:"images/apple.jpeg"},
    {name:"coconut",image:"images/coconut.jpeg"},
    {name:"orange",image:"images/orange.jpeg"}
]

//DEFAULT INITIAL TIME
let seconds = 0      
let minutes = 0

//DEFAULT INITIAL MOVE and WIN 
let movesCount = 0
let wincCount = 0

//TIMER
const timeRunner = () => {
    seconds += 1
    if (seconds >= 60){     //SECONDS TO MINUTES
    minutes += 1
    seconds = 0
}

//DISPLAY FORMAT FOR TIME
let secondsValue = seconds < 10 ? `0${seconds}` : seconds
let minutesValue = minutes < 10 ? `0${minutes}` : minutes
timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`

}

//MOVES COUNTER
const movesCounter = () => {
    movesCount +=1;
    moves.innetHTML = `<span>Moves:</span>${movesCount}`

}




