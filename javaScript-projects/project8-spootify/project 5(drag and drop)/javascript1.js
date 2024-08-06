
const droppable = document.querySelector('.droppable');
const img = document.querySelector('.img');

img.addEventListener('dragstart', (e) => {
e.target.classList.add('hold');
       

/* THESE 3 LINE OF CODE IS EXTRA IT DOESNOT IMPACT ANY THING ON WEBSITE
 // setTimeout(()=>{
//     e.target.classList.add('hide');
// },0);
*/

});


img.addEventListener('dragend', (e) => {
    
    // e.target.className=' img';//THIS LINE DOESNOT IMPACT WEBPAGE
    });

droppable.addEventListener('dragover', (event) => {
  event.preventDefault();
});

droppable.addEventListener('drop', (e) => {
  // e.preventDefault();//DOESNOT IMPACT 

  e.target.append(img);

});