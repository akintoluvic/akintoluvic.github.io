document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const timeLeft = document.querySelector('#time-left')
    const result = document.querySelector('#result')
    const button = document.querySelector('#button')

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

})