let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newGamebtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#winner');


let turnO = true;
const Patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    let turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (turnO) {
            box.innerText = 'O'
            box.style.color = 'white'
            turnO = false;
        } else {
            box.innerText = 'X'
            box.style.color = 'black'
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })

})
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
    }
}
const showWinner = (winner) => {
    msg.innerHTML = `Congratulation 💢🥂✨  Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}

const checkWinner = () => {
    for (let winPatterns of Patterns) {
        let pat1val = boxes[winPatterns[0]].innerText;
        let pat2val = boxes[winPatterns[1]].innerText;
        let pat3val = boxes[winPatterns[2]].innerText;

        if (pat1val !== '' && pat2val !== '' && pat3val !== '') {
            if (pat1val === pat2val && pat2val === pat3val) {
                showWinner(pat1val);
            }
        }
    }
}

newGamebtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);
