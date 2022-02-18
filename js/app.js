// tic tac toe
// button to start the gmame(create a listener for on click)
// player 1, player 2; assign them x or o,
// variable for x
// variable foy o
// make an object to hold the players box selection
const boxA = document.querySelector('#box1')
const boxB = document.querySelector('#box2')
const boxC = document.querySelector('#box3')
const boxD = document.querySelector('#box4')
const boxE = document.querySelector('#box5')
const boxF = document.querySelector('#box6')
const boxG = document.querySelector('#box7')
const boxH = document.querySelector('#box8')
const boxI = document.querySelector('#box9')
const start = document.querySelector('#start')
const restart = document.querySelector('#restart')
const gameBoard = document.querySelector('.game')
const scoreboard = document.querySelector('.scoreboard')
const letterX = document.querySelector('#x')
const letterO = document.querySelector('#o')
const box = document.querySelector('.box')
const winner = document.querySelector('#winner')
const turn = document.querySelector('#turn')

//test

let player = 'X'

const outcome = () => {
    console.log('this is box A inner text', boxA.innerText)
    console.log('this is box B inner text', boxB.innerText)
    if (boxA.innerText === player && boxB.innerText === player && boxC.innerText === player ){
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxD.innerText === player && boxE.innerText === player && boxF.innerText === player) {
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxG.innerText === player && boxH.innerText === player && boxI.innerText === player) {
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxA.innerText === player && boxD.innerText === player && boxG.innerText === player) {
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxB.innerText === player && boxE.innerText === player && boxH.innerText === player) {
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxC.innerText === player && boxF.innerText === player && boxI.innerText === player) {
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxA.innerText === player && boxE.innerText === player && boxI.innerText === player) {
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxC.innerText === player && boxE.innerText === player && boxG.innerText === player) {
        winner.innerText = `${player} has been declared victorious! ^-^`
    } else if (boxA === '' && boxB === '' && boxC === '' && boxD === '' && boxE === '' && boxF === '' && boxG === '' &&  boxH === '' && boxI === '')  {
        winner.innerText = 'There is no winner! Try again!'
    } else return
}

// if (boxA.innerText === player && boxB.innerText === player && boxC.innerText === player )

const playerSelection = () => {
    outcome()
    if (player === 'O') {
        player = "X"
        turn.innerText = "X's Turn!"
    } else {
        player = "O"
        turn.innerText = "O's Turn!"
    }
}

// places x or o in box
const placeA = () => {
    // boxA.appendChild('X')
    if (boxA.innerText === "") {
        console.log('pressA')
        boxA.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const placeB = () => {
    // boxB.appendChild('X')
    if (boxB.innerText === "") {
        console.log('pressB')
        boxB.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const placeC = () => {
    // boxC.appendChild('X')
    if (boxC.innerText === "") {
        console.log('pressC')
        boxC.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const placeD = () => {
    // boxD.appendChild('X')
    if (boxD.innerText === "") {
        console.log('pressD')
        boxD.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const placeE = () => {
    // boxE.appendChild('X')
    if (boxE.innerText === "") {
        console.log('pressE')
        boxE.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const placeF = () => {
    // boxF.appendChild('X')
    if (boxF.innerText === "") {
        console.log('pressF')
        boxF.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const placeG = () => {
    // boxG.appendChild('X')
    if (boxG.innerText === "") {
        console.log('pressG')
        boxG.innerText = player
        playerSelection()

    }   else {
        console.log('This box is full')
    }
}
const placeH = () => {
    // boxH.appendChild('X')
    if (boxH.innerText === "") {
        console.log('pressH')
        boxH.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const placeI = () => {
    // boxI.appendChild('X')
    if (boxI.innerText === "") {
        console.log('pressI')
        boxI.innerText = player
        playerSelection()
    }   else {
        console.log('This box is full')
    }
}
const clearGame = () => {
    window.location.reload();

}

document.addEventListener('DOMContentLoaded', () => {
    let pressA = boxA.addEventListener('click', placeA)
    let pressB = boxB.addEventListener('click', placeB)
    let pressC = boxC.addEventListener('click', placeC)
    let pressD = boxD.addEventListener('click', placeD)
    let pressE = boxE.addEventListener('click', placeE)
    let pressF = boxF.addEventListener('click', placeF)
    let pressG = boxG.addEventListener('click', placeG)
    let pressH = boxH.addEventListener('click', placeH)
    let pressI = boxI.addEventListener('click', placeI)
    let reset = restart.addEventListener('click', clearGame)
})