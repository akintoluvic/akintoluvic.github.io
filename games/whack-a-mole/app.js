const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let currentTime = timeLeft.textContent

function randomSquare() {
    // remove class name mole from all squares
    squares.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    // assign the id of the random position to hitPosition
    hitPosition = randomPosition.id
    // console.log(hitPosition)
}

squares.forEach(square => {
    addEventListener('mouseup', () => {
        console.log(square.id)
        if(square.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500 )
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