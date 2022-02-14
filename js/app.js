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
// const letterX = document.querySelector('#x')
// const letterO = document.querySelector('#o')
const box = document.querySelector('.box')

const playerSelection = (letterX, letterO) => {

}

//places x or o in box
function place() {
    boxA.appendChild('X')
    console.log('pressA')
}
// let x = box.addinnerText('x')

// what needs to be correct in order to see who wins
// whichever button is pressed first is p1, else p2
const letterX = () => {
    if (boxA === "") {
        console.log('yes')

    }
    const wow = document.createElement('div')
    wow.appendChild('X')
    console.log('Inserted A')
    
}
document.addEventListener('domContentLoaded', () => {
    let pressA = boxA.addEventListener('click', letterX)
    let pressB = boxB.addEventListener('click', letterX)
    let pressC = boxC.addEventListener('click', letterX)
    let pressD = boxD.addEventListener('click', letterX)
    let pressE = boxE.addEventListener('click', letterX)
    let pressF = boxF.addEventListener('click', letterX)
    let pressG = boxG.addEventListener('click', letterX)
    let pressH = boxH.addEventListener('click', letterX)
    let pressI = boxI.addEventListener('click', letterX)
})




//const sayName = (name) => {
//	console.log('Hello! My name is ' + name);
//}
//sayName("Frodo")



// const turn = () => {
//      for (let x = 0; x < 9; x++) {
//      if (p % 2 === 0) {
//      
//}
//}
    
// }
// for if a person makes a move
// const move = () => {
//     box.addEventListener('click', turn )
//     // make player 1 turn
//     if ( === 2 % 0) {
//         box.innerText =`O`
//     } else {
//         box.innerText =`X`
//     }
// }

// const newGame = () => {
//     while (gameBoard.firstChild)
//         // if there are any selected squares, will clear
//         gameBoard.removeChild(gameBoard.firstChild)
//         letterX.addEventListener('click', x)
//         console.log('clear')
//     gameBoard.innerText = 'New Game Created'
//     console.log('clear')
// }
