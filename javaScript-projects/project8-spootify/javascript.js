

// //initialize the variables
// let audioElement=new Audio("./7.mp3")
// let Index=  1
// let masterPlay=document.getElementById('masterPlay')
// let myProgressBar=document.getElementById('myprogressbar')
// console.log(myProgressBar)
// let gif=document.getElementById('gif')
// let songItem=document.getElementsByClassName("songItem")



// //handle play pause event
// masterPlay.addEventListener('click',function()
// {
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play()
//          masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause")
//         gif.style.opacity=1
//     } 
//     else{
//         audioElement.pause()
//          masterPlay.classList.add("fa-circle-play");
//         masterPlay.classList.remove("fa-circle-pause")
//         gif.style.opacity=0
//      }
    
// })

// audioElement.addEventListener('timeupdate',function(){
    
//     let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    
//     myProgressBar.value=progress
// })

// myProgressBar.addEventListener('change',function(){
//     audioElement.currentTime=myProgressBar.value *audioElement.duration/100
// })


// let songItenmPlay=document.getElementsByClassName('songItemPlay')

// for (let a of songItenmPlay){
  
  

//     a.addEventListener('click',function(e){
//         console.log("value of e on click:",e.target)
//         Index=parseInt(e.target.id)
//         e.target.classList.remove("fa-circle-play")
//         e.target.classList.add("fa-circle-pause")
//         audioElement.src=`./${Index}.mpeg`
//         audioElement.currentTime=0
//         audioElement.play()
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause")

//         })
    
    
// }
// document.getElementById("next").addEventListener('click',function(){
//     if(Index>=6)
//         {
//             Index=1
//         }
//         else{
//             Index=Index+1
//         }
//         audioElement.src=`./${Index}.mpeg`
//         audioElement.currentTime=0
//         audioElement.play()
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause");

// })

// document.getElementById("previous").addEventListener('click',function(){
//     if(Index<=1)
//         {
//             Index=1
//         }
//         else{
//             Index=Index-1
//         }
//         audioElement.src=`./${Index}.mpeg`
//         audioElement.currentTime=0
//         audioElement.play()
//         masterPlay.classList.remove("fa-circle-play");
//         masterPlay.classList.add("fa-circle-pause")
// })




// let songs=[
//     {songname:"sajni", filepath:"./sajni.mp3",coverpath:"./download.jpeg"},
//     {songname:"kaun disa", filepath:"./1.mpeg",coverpath:"./flower3.jpeg"},
//     {songname:"52 gaj", filepath:"./2.mpeg",coverpath:"./flowershop.jpeg"},
//     {songname:"udh jaey", filepath:"./3.mpeg",coverpath:"./garden.jpeg"},
//     {songname:"sona", filepath:"./4.mpeg",coverpath:"./download.jpeg"},
//     {songname:"sajni", filepath:"./5.mpeg",coverpath:"./download.jpeg"},
//     {songname:"sajni", filepath:"./6.mpeg",coverpath:"./download.jpeg"},
//     {songname:"sajni", filepath:"./sajni.mp3",coverpath:"./newbasket.png"}
   
// ]

















//initialize the variables
let audioElement = new Audio("./7.mp3");
let Index = 1;
let masterPlay = document.getElementById('masterPlay');
console.log(masterPlay)
let myProgressBar = document.getElementById('myprogressbar');
console.log(myProgressBar);
let gif = document.getElementById('gif');
console.log()
let songItems = document.getElementsByClassName("songItem");
console.log()
let songItemPlays = document.getElementsByClassName('songItemPlay');
console.log()

// Utility function to reset all play icons to their default state
function resetPlayIcons() {
    for (let playIcon of songItemPlays) {
        playIcon.classList.remove("fa-circle-pause");
        playIcon.classList.add("fa-circle-play");
    }
}

//handle play pause event
masterPlay.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        document.getElementById(Index).classList.remove("fa-circle-play");
        document.getElementById(Index).classList.add("fa-circle-pause");
    } else {
        audioElement.pause();
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        gif.style.opacity = 0;
        document.getElementById(Index).classList.add("fa-circle-play");
        document.getElementById(Index).classList.remove("fa-circle-pause");
    }
});

audioElement.addEventListener('timeupdate', function () {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', function () {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

for (let playIcon of songItemPlays) {
    playIcon.addEventListener('click', function (e) {
        Index = parseInt(e.target.id);
        resetPlayIcons();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `./${Index}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    });
}

document.getElementById("next").addEventListener('click', function () {
    if (Index >= 6) {
        Index = 1;
    } else {
        Index = Index + 1;
    }
    resetPlayIcons();
    audioElement.src = `./${Index}.mpeg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById(Index).classList.remove("fa-circle-play");
    document.getElementById(Index).classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener('click', function () {
    if (Index <= 1) {
        Index = 1;
    } else {
        Index = Index - 1;
    }
    resetPlayIcons();
    audioElement.src = `./${Index}.mpeg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById(Index).classList.remove("fa-circle-play");
    document.getElementById(Index).classList.add("fa-circle-pause");
});
