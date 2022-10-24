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
