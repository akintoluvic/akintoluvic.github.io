const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let currentTime = timeLeft.textContent

function randomSquare() {
    // remove class name mole from all squares
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assign the id of the random position to hitPosition
    hitPosition = randomPosition.id
    console.log(hitPosition)
}

square.forEach(squ => {
    addEventListener('mouseup', () => {
        console.log(squ.id)
        if(squ.id === hitPosition) {
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

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is' + result)
    }
}

let timerId = setInterval(countDown, 1000)