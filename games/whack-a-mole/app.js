const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;

function randomSquare() {
    // remove class name mole from all squares
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assign the id of the random position to hitPosition
    hitPosition = randomPosition.id
}

square.forEach(id => {
    addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 750 )
}

moveMole()