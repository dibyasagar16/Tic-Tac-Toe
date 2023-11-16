let allBoxes = Array.from(document.getElementsByClassName('box'));
let gameOver = false;
let turn = 'X'


//Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('box-text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && boxTexts[e[0]].innerText !== "") {
            document.querySelector('.turn').innerText = `${boxTexts[e[0]].innerText} Won`;
            gameOver = true;
        }
    })
}

//Game Logic
allBoxes.forEach(element => {
    let boxText = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName('turn')[0].innerText = `Turn for ${turn}`;
            }
        }
    })
})

//Logic Reset Button
let btn = document.getElementById('reset');
btn.addEventListener('click', () => {
    let boxText = Array.from(document.getElementsByClassName('box-text'));
    boxText.forEach(element => {
        element.innerText = ''
        turn = 'X'
        document.getElementsByClassName('turn')[0].innerText = `Turn for ${turn}`;
    })
})