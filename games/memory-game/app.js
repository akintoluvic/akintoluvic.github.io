document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cardArray = [
        {
            name: 'bicycle',
            img: 'images/bicycle.png'
        },
        {
            name: 'camera',
            img: 'images/camera.png'
        },
        {
            name: 'owl',
            img: 'images/owl.png'
        },
        {
            name: 'radio',
            img: 'images/radio.png'
        },
        {
            name: 'rainbow',
            img: 'images/rainbow.png'
        },
        {
            name: 'cassette',
            img: 'images/cassette.png'
        },
        {
            name: 'bicycle',
            img: 'images/bicycle.png'
        },
        {
            name: 'camera',
            img: 'images/camera.png'
        },
        {
            name: 'owl',
            img: 'images/owl.png'
        },
        {
            name: 'radio',
            img: 'images/radio.png'
        },
        {
            name: 'rainbow',
            img: 'images/rainbow.png'
        },
        {
            name: 'cassette',
            img: 'images/cassette.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const displayResult = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // Create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/color.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        displayResult.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            displayResult.textContent = 'Congratulations! You found them all'
        }
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})