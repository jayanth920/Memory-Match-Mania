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

//Pictures Array
const items = [
    {name:"pizza",image:"images/pizza.jpg"}
]