//function to generate random color
const randomColor=function(){
    let hex='0123456789ABCDEF'
    let color="#"
    for(let i=0;i<6;i++)
        {
            color +=hex[Math.floor(Math.random()*16)]
        }
        return color
}

let store;//compulsory to make store as a global variable as it is use in clear onterval as a parameter
const startchangingcolor=function(){
    store=setInterval(function(){document.body.style.backgroundColor=randomColor() },1000)    
}

//evemnt on start button
document.querySelector(".start").addEventListener('click',startchangingcolor)




//function to stop random color
const stopchangingcolor=function(){
    clearInterval(store);
};

//event on stop button
document.querySelector(".stop").addEventListener('click',stopchangingcolor)

