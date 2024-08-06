const clock=document.querySelector(".clock")
console.log(clock)
 const zcx=setInterval(function(){
    let date=new Date()
   // (console.log(date))//Mon Jun 03 2024 07:30:42  output of the new date()
    let abc=date.toLocaleTimeString();// toLocaleTimeString() is a method of new date() to get the time 
    //( console.log(abc))
    // let abc=Date.now()
    clock.innerHTML=abc;
},1000)

//stoping timer
 document.querySelector(".stop").addEventListener("click",function(){
    clearInterval(zcx)
})




// document.querySelector(".resume").addEventListener('click',function(){
// zcx=setInterval(function(){
//     let date=new Date()  
//     let abc=date.toLocaleTimeString();
//     clock.innerHTML=abc;
// },1000)
// })

//  document.querySelector(".stop").addEventListener("click",function(){
//     clearInterval(zcx)
// })

