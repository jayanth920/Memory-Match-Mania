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

//GENERATES THE WHOLE GAME ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
const generateGame = () => {
    const dimensions = selectors.board.getAttribute('data-dimension')

    if (dimensions % 2 !== 0) {
        throw new Error("The dimension of the board must be an even number.")
    }

    const emojis = ['🍕', '🍒', '🍓', '🌮', '🌯', '🍇', '🍉', '🍟', '🍎', '🌭']
    const picks = pickRandom(emojis, (dimensions * dimensions) / 2) 
    const items = shuffle([...picks, ...picks])
    const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map(item => `
                <div class="card">
                    <div class="card-front" style="font-size:30;align=center">FLIP<br>ME</div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `
    
    const parser = new DOMParser().parseFromString(cards, 'text/html')

    selectors.board.replaceWith(parser.querySelector('.board'))
}
//START FUNCTION WITH TIMER AND MOVES COUNTER  💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛💛
const startGame = () => {                   //When Start button is clicked
    state.gameStarted = true
    selectors.start.classList.add('disabled')

    startBtn.classList.add("lock");


    setTimeout(function() {
         msg.style.display = "none";
    }, 1500); // <-- time in milliseconds





    state.loop = setInterval(() => {
        state.totalTime++

        selectors.moves.innerText = `${state.totalFlips} Moves`
        selectors.timer.innerText = `Time: ${state.totalTime} sec`
    }, 1000)
}

//CARD FLIP 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
const flipBackCards = () => {
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })

    state.flippedCards = 0
}

const flipCard = card => {
    state.flippedCards++
    state.totalFlips++

    if (!state.gameStarted) {
        startGame()
    }

    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll('.flipped:not(.matched)')

        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            flippedCards[0].classList.add('matched')
            flippedCards[1].classList.add('matched')
        }

        setTimeout(() => {
            flipBackCards()
        }, 1000)
    }

    // If there are no more cards that we can flip, we won the game
    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped')
            selectors.win.innerHTML = `
                <span class="win-text">
                    You won!<br />
                    with <span class="highlight">${state.totalFlips}</span> Moves<br />
                    under <span class="highlight">${state.totalTime}</span> seconds
                </span>
            `
            startBtn.classList.remove("lock");
            startBtn.style.color = "white";
            startBtn.innerText = "Replay";
            startBtn.addEventListener("click", event => {
                window.location.reload();
            })

            clearInterval(state.loop)
        }, 1000)
    }
}

//CLICK RESPONSE FUNCTION 👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍👍
const attachEventListeners = () => {
    document.addEventListener('click', event => {
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

generateGame()
attachEventListeners()

generateGame()