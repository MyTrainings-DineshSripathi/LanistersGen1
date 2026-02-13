let number = 0

const display = document.getElementById('display')

function increase(){
    console.log(++ number)
    display.innerText = number
}

function decrease(){
    console.log(-- number)
    display.innerText = number
}

function reset(){
    number = 0
    console.log(number)
    display.innerText = number
}


const increaseBtn = document.getElementById('increase-button')
const decreaseBtn = document.getElementById('decrease-button')
const resetBtn = document.getElementById('reset-button')

increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)