
let audioturn= new Audio("./turn.mp3")
let gameover=new Audio("./winning.mp3")
let turn="x"
let isgameover=false
//function to change theturn
const changeTurn=()=>{
    return turn==="x"?"0":"x"

}
//function to check the win
const checkWin=()=>{
    let boxText=document.querySelectorAll('.boxText')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    wins.forEach(e=>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[2]].innerText===boxText [e[1]].innerText) &&(boxText[e[0]].innerText!=="") )
            {
                document.querySelector('.info').innerText=boxText[e[0]].innerText + " won"
                isgameover=true
                document.querySelector('.imgbox img').classList.remove('hidden');
                gameover.play()
                
            }
    })

}



// Function to check for a win
// const checkWin = () => {
//     let boxText = document.querySelectorAll('.boxText');
//     let wins = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     let winner = null;
//     wins.forEach(e => {
//         if (boxText[e[0]].innerText === boxText[e[1]].innerText &&
//             boxText[e[2]].innerText === boxText[e[1]].innerText &&
//             boxText[e[0]].innerText !== "") {

//             winner = boxText[e[0]].innerText;
//         }
//     });

//     // Update info span with the latest winner
//     if (winner) {
//         document.querySelector('.info').innerText = winner + " won";
//         isgameover = true;
//         document.querySelector('.imgbox img').classList.remove('hidden');
//         // gameover.play();
        
//     }
// };


//Game logic

let boxes=document.getElementsByClassName("box")
for(let a of boxes){
    
    let boxText=a.querySelector('.boxText')
    a.addEventListener('click',function(){
        if (boxText.innerText===""){
            boxText.innerText=turn
            turn=changeTurn()
            audioturn.play()
            checkWin()
            if(!isgameover)
                { document.getElementsByClassName('info')[0].innerText="turn for::"+ turn}
            
            
           
        }
    })
}
// reset logic
document.getElementById('reset').addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxText');
    boxTexts.forEach(boxText => {
        boxText.innerText = "";
    });
    turn = "x";
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for: " + turn;
    document.querySelector('.imgbox img').classList.add('hidden');
});