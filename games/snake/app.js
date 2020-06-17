document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0  // first div in our grid
    let appleIndex = 0
    let currentSnake = [2,1,0]  // 2 for head, 0 for tail and 1's for the body
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervaltime = 0
    let interval = 0

    // assign functions to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake') // remove snake from all squares

        if(e.keyCode === 39) {
            direction = 1   // right arrow key
        } else if(e.keyCode === 38) {
            direction = -width   // up arrow key
        } else if(e.keyCode === 37) {
            direction - 1   // left arrow key
        } else (e.keyCode === 40) {
            direction = +width   // down arrow key
        }
    }

    document.addEventListener('keyup', control)










})