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


    const grid = document.querySelector('.grid')

    // Create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/color.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    createBoard()

})