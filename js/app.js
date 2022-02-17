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

// const outcome = () => {
//     if ()
// }


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
        console.log(player)
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
        console.log(player)
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
        console.log(player)
    }   else {
        console.log('This box is full')
    }
const placeD = () => {
    // boxD.appendChild('X')
    if (boxD.innerText === "") {
        console.log('pressC')
        boxD.innerText = player
        playerSelection()
        console.log(player)
    }   else {
        console.log('This box is full')
    }
const placeE = () => {
    // boxE.appendChild('X')
    if (boxE.innerText === "") {
        console.log('pressC')
        boxE.innerTeFt = player
        playerSelection()
        console.log(player)
    }   else {
        console.log('This box is full')
    }
const placeF = () => {
    // boxF.appendChild('X')
    if (boxF.innerText === "") {
        console.log('pressC')
        boxF.innerText = player
        playerSelection()
        console.log(player)
    }   else {
        console.log('This box is full')
    }
const placeG = () => {
    // boxG.appendChild('X')
    if (boxG.innerText === "") {
        console.log('pressC')
        boxG.innerText = player
        playerSelection()
        console.log(player)
    }   else {
        console.log('This box is full')
    }
const placeH = () => {
    // boxH.appendChild('X')
    if (boxH.innerText === "") {
        console.log('pressC')
        boxH.innerText = player
        playerSelection()
        console.log(player)
    }   else {
        console.log('This box is full')
    }
const placeI = () => {
    // boxI.appendChild('X')
    if (boxI.innerText === "") {
        console.log('pressC')
        boxI.innerText = player
        playerSelection()
        console.log(player)
    }   else {
        console.log('This box is full')
    }
}



// what needs to be correct in order to see who wins
// whichever button is pressed first is p1, else p2
// const letterX = () => {
//     if (boxA === "") {
//         console.log('yes')

//     }
//     const wow = document.createElement('div')
//     wow.appendChild('X')
//     console.log('Inserted A')
    
//}
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




// const player1 = 'X'
// const player2 = 'O'
// const board = ['','','','','','','','','']
// const game = 


// const box = document.querySelector('.game')
// console.log(box)
// for (let i = 0; i < box.children.length; i++)
//     console.log(box.children[i].id)
//     if (box.children )
// document.querySelectorAll('.box').addEventListener('click',  )