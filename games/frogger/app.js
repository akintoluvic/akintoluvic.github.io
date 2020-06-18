document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const button = document.querySelector('#button')

    const carsLeft = document.querySelectorAll('car-left')
    const carsRight = document.querySelectorAll('car-right')

    const logsLeft = document.querySelectorAll('log-left')
    const logsRight = document.querySelectorAll('log-right')

    const width = 0
    let currentIndex = 76
    let timerId


    // render frog on starting block
    squares[currentIndex].classList.add('frog')

    // function to move frog
    function moveFrog(e) {
        squares[currentIndex].classList.remove('frog')
        switch (e.keyCode) {
            case 37:
                if(currentIndex % width !== 0) currentIndex -= 1
                break;
            case 38:
                if(currentIndex - width >= 0) currentIndex -= width
                break;
            case 39:
                if(currentIndex % width < width - 1) currentIndex += 1
                break;
            case 40:
                if(currentIndex + width < width * width) currentIndex += width
                break;
        }
        squares[currentIndex].classList.add('frog')
        lose()
        win()
    }

    // move cars
    function autoMoveCars() {
        carsLeft.forEach(carLeft => moveCarLeft(carLeft))
        carsRight.forEach(carRight => moveCarRight(carRight))
    }

    // move car left
    function moveCarLeft(carLeft) {
        switch (true) {
            case carsLeft.classList.contains('c1'):
                carsLeft.classList.remove('c1')
                carsLeft.classList.add('c2')
                break
            case carsLeft.classList.contains('c2'):
                carsLeft.classList.remove('c2')
                carsLeft.classList.add('c3')
                break
            case carsLeft.classList.contains('c3'):
                carsLeft.classList.remove('c3')
                carsLeft.classList.add('c1')
                break
        }
    }





})