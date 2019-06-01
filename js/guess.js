document.addEventListener("DOMContentLoaded", function (event) {

    const guess = document.getElementById('guess')
    const guessLeft = document.getElementById('guessLeft')
    const pastGuess = document.getElementById('pastGuess')
    const form = document.getElementById('form')
    let pastGuessArr = [];
    let guessMe = Math.floor(Math.random() * (10 - 1) + 1)
    console.log(guessMe)

    const resetGame = () => {
        guess.innerText = "..."
        guessLeft.innerText = "5"
        pastGuess.innerText = '...'
        pastGuessArr = []
        guessMe = Math.floor(Math.random() * (10 - 1) + 1)
        console.log(guessMe)

    }
    form.addEventListener('reset', resetGame)


    document.addEventListener('keydown', keystroke => {
        switch (keystroke.key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                pastGuessArr.push(keystroke.key)
                if (keystroke.key == guessMe) {
                    alert('you got the number')
                    resetGame();
                } else if (guessLeft.innerText > "0") {
                    guess.innerText = keystroke.key
                    guessLeft.innerText--;
                    pastGuess.innerText = pastGuessArr
                } else if (guessLeft.innerText === '0') {
                    alert('game over, try again')
                    resetGame();
                }
                break;
            default:
                break;
        }
    })
});