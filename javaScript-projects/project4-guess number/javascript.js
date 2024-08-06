let randomNumber=parseInt(Math.random()*100 + 1)
console.log(randomNumber)

const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessfield")
const startover=document.querySelector(".resultparas")
const prevguess=document.querySelector(".guesses")
const remaining=document.querySelector(".lastresult")
const loworHi=document.querySelector(".loworHi")
const p=document.createElement('p')


let guessSlot=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener("click",function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value) 
    validateGuess(guess)    
    })
}

function validateGuess(guess){
if(isNaN(guess)){
    alert("please eneter a valid number")
}
else if(guess<1){
    alert("please eneter a number greater then 1")
}
else if(guess>=100){
    alert("please eneter a number less than 100")
}
else{
    guessSlot.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displaymessage(`game over random number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }

}
}


function checkGuess(guess){
if(guess===randomNumber){
    displaymessage("you guess it right")
    endGame()}
    else if(guess>randomNumber){
        displaymessage("your guess is too high") 
    }
    else if (guess<randomNumber){
        displaymessage("your guess is too low")
    }

}

function displayGuess(guess){
userInput.value=""
prevguess.innerHTML +=`${guess},`
numGuess++
remaining.innerHTML=`${10-numGuess}`

}

function displaymessage(message){
loworHi.innerHTML=`<h2>${message} </h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newGame"> start new game</h2>'
    startover.appendChild(p)
    playGame=false
    newGame()

}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener("click",function(e){
        randomNumber=parseInt(Math.random()*100+1)
        guessSlot=[]
        numGuess=1
        prevguess.innerHTML='';
        remaining.innerHTML=`${10-numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame=true

    })

}