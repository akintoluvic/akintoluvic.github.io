document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')
    let squares = Array.from(grid.querySelectorAll('div'))
    const width = 10
    const height = 20
    let currentPosition = 4

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
    //   freeze()
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









})