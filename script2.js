// SYMBOLS AND THEIR MEANING : ❤️🤍🧡💛=> HEARTS OF THE GAME
//                            👍 => SUPPORT FUNCTION
//                            🔽 => DECLARATIONS and MISC.
 
//DECLARATIONS AND SELECTORS 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
const selectors = {
    boardContainer: document.querySelector('.board-container'),
    board: document.querySelector('.board'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}

let msg = document.querySelector('.msg');
let msgText = document.querySelector('.msg p');
let startBtn = document.querySelector('#btn');

const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

$(document).ready(function(){
    $(document).mousemove(function(p){
      var cursorX = p.pageX;
      var cursorY = p.pageY;
      var tranX = ((7 * cursorX) / 570) + 40;
      var tranY = ((7 * cursorY) / 570) + 50;
      $('.text').css({
        "background-position": tranX + "%" + tranY + "%"
      });
    });
  });

  
//TOGGLE THEME BUTTON 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

//CARD SHUFFLING 🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍

const shuffle = array => {
    const clonedArray = [...array]

    for (let i = clonedArray.length - 1; i > 0; i--) {
        const randomi = Math.floor(Math.random() * (i + 1))
        const original = clonedArray[i]
        clonedArray[i] = clonedArray[randomi]
        clonedArray[randomi] = original
    }

    return clonedArray
}

//RANDOM CARD PICK FUNCTION 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
const pickRandom = (array, items) => {
    const clonedArray = [...array]
    const randomPicks = []

    for (let i = 0; i < items; i++) {
        const randomi = Math.floor(Math.random() * clonedArray.length)
        
        randomPicks.push(clonedArray[randomi])
        clonedArray.splice(randomi, 1)
    }

    return randomPicks
}

