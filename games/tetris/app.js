document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.querySelector('.buttoner')
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('.score-display')
    const linesDisplay = document.querySelector('.lines-display')
    const displaySquares = document.querySelectorAll('.previous-grid div')
    let squares = Array.from(grid.querySelectorAll('div'))
    console.log(squares)
    const width = 10
    const height = 20
    let currentPosition = 4
    let currentIndex = 0
    let timerId
    let score = 0
    let lines = 0
    


    //assign function to key codes
    function control(e) {
        if (e.keyCode === 39) {
            moveRight()
        } else if (e.keyCode === 38) {
            rotate()
        } else if (e.keyCode === 37) {
            moveLeft()
        } else if (e.keyCode === 40) {
            moveDown()
        }
    }

    document.addEventListener('keydown', control)


    //The Tetrominoes
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ]

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]


    // Randomly select Tetromino
    let random = Math.floor(Math.random() * theTetrominoes.length)
    let currentRotation = 0
    let currentTetromino = theTetrominoes[random][currentRotation]


    // draw tetromino shape
    function drawTetromino() {
        currentTetromino.forEach( index => {
            squares[currentPosition + index].classList.add('block')
        })
    }

    // undraw tetromino shape
    function unDrawTetromino() {
        currentTetromino.forEach((index) => {
        squares[currentPosition + index].classList.remove("block");
        });
    }

    // move tetromino down
    function moveDown() {
        unDrawTetromino()
        currentPosition = currentPosition += width
        drawTetromino()
          freeze()
    }


    // move right and prevent collision
    function moveRight() {
        unDrawTetromino()
        const isAtRightEdge = currentTetromino.some(index => (currentPosition + index) % width === width - 1)
        if (!isAtRightEdge) currentPosition += 1
        if (currentTetromino.some(index => squares[currentPosition + index].classList.contains('block2'))) {
            currentPosition -= 1
        }
        drawTetromino()
    }

    // move left and prevent collision
    function moveLeft() {
        unDrawTetromino()
        const isAtLeftEdge = currentTetromino.some(index => (currentPosition + index) % width === 0)
        if (!isAtLeftEdge) currentPosition -= 1
        if (currentTetromino.some(index => squares[currentPosition + index].classList.contains('block2'))) {
            currentPosition += 1
        }
        drawTetromino()
    }


    // rotate Tetromino
    function rotate() {
        unDrawTetromino()
        currentRotation++
        if (currentRotation === currentTetromino.length) {
            currentRotation = 0
        }
        currentTetromino = theTetrominoes[random][currentRotation]
        drawTetromino()
    }


    //show previous tetromino in scoreDisplay
    const displayWidth = 4
    let displayIndex = 0
    let nextRandom = 0

    const smallTetrominoes = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2], /* lTetromino */
        [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], /* zTetromino */
        [1, displayWidth, displayWidth + 1, displayWidth + 2], /* tTetromino */
        [0, 1, displayWidth, displayWidth + 1], /* oTetromino */
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] /* iTetromino */
    ]

    function displayShape() {
        displaySquares.forEach(square => {
        square.classList.remove('block')
        // square.style.backgroundImage = 'none'
        })
        smallTetrominoes[nextRandom].forEach(index => {
        displaySquares[displayIndex + index].classList.add('block')
        // displaySquares[displayIndex + index].style.backgroundImage = colors[nextRandom]
        })
    }

    //freeze the shape
    function freeze() {
      // if block has settled
      if ( currentTetromino.some( (index) =>
            squares[currentPosition + index + width].classList.contains("block3") 
            || squares[currentPosition + index + width].classList.contains("block2"))
      ) {
        // make it block2
        currentTetromino.forEach((index) =>
          squares[index + currentPosition].classList.add("block2")
        )
        // start a new tetromino falling
        random = nextRandom
        nextRandom = Math.floor(Math.random() * theTetrominoes.length)
        currentTetromino = theTetrominoes[random][currentRotation]
        currentPosition = 4
        drawTetromino()
        displayShape()
        gameOver()
        addScore()
      }
    }


    startBtn.addEventListener('click', () => {
        if(timerId) {
            clearInterval(timerId)
            timerId = null
        } else {
            drawTetromino()
            timerId = setInterval(moveDown, 1000)
            nextRandom = Math.floor(Math.random() * theTetrominoes.length)
            displayShape()
        }
    })

    // game over
    function gameOver() {
        if(currentTetromino.some(index => 
            squares[currentPosition + index].classList.contains('block2') )
        ) {
            scoreDisplay.textContent = 'end'
            clearInterval(timerId)
        }
    }

    // add score
    function addScore() {
        for ( currentIndex = 0; currentIndex < 199; currentIndex += width) {
            const row = [currentIndex, currentIndex + 1, currentIndex + 2, currentIndex + 3, currentIndex + 4, currentIndex + 5, currentIndex + 6, currentIndex + 7, currentIndex + 8, currentIndex + 9]

            if(row.every(index => squares[index].classList.contains('block2'))) {
                score += 10
                lines += 1
                scoreDisplay.innerHTML = score
                linesDisplay.innerHTML = lines
                row.forEach(index => {
                    squares[index].classList.remove('block2') 
                    || squares[index].classList.remove('block')
                })

                // splice array for removing completed rows
                const squaresRemoved = squares.splice(currentIndex, width)
                squares = squaresRemoved.concat(squares)
                squares.forEach(cell => grid.appendChild(cell))
            }
        }
    }







})