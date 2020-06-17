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
    let intervalTime = 0
    let interval = 0



    // to start and restart the game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0

        // randomApple()

        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    // snake move outcomes
    function moveOutcomes() {
        // snake hitting border and self
        if (
            (currentSnake[0] + width >= (width * width) && direction === width) || //snake hits buttom
            (currentSnake[0] % width === width - 1 && direction === 1) || //snake hits right wall
            (currentSnake[0] % width === 0 && direction === -1) || //snake hits left wall
            (currentSnake[0] - width < 0 && direction === -width) || //snake hits top
            squares[currentSnake[0] + direction].classList.contains('snake') // snake hits self
        ) {
            return clearInterval(interval)
        }

        const tail = currentSnake.pop() // removes the last item of the snake array
        squares[tail].classList.remove('snake') // remove the tail from the board
        currentSnake.unshift(currentSnake[0] + direction) // gives direction to the head

        // snake getting apple
        if(squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)

            // randomApple()

            score++
            scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
        }
        squares[currentSnake[0]].classList.add('snake')

    }

    

    


    // assign functions to keycodes
    function control(e) {
        squares[currentIndex].classList.remove('snake') // remove snake from all squares

        if(e.keyCode === 39) {
            direction = 1   // right arrow key
        } else if(e.keyCode === 38) {
            direction = -width   // up arrow key
        } else if(e.keyCode === 37) {
            direction - 1   // left arrow key
        } else if(e.keyCode === 40) {
            direction = +width   // down arrow key
        }
    }

    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)










})