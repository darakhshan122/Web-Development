


const whiteboxes = document.getElementsByClassName("whiteboxx");
const image = document.querySelector(".img");


for (let whitebox of whiteboxes) {
    whitebox.addEventListener("dragstart", (e) => {
        // console.log("drag start"); 
        e.target.classList.add('hold');
       

        setTimeout(()=>{
          e.target.className= ' hide';
        },0);
        
    });
    whitebox.addEventListener("dragend", (e) => {
        // console.log("drag end");
        e.target.className=' whiteboxx';
    });
    
    whitebox.addEventListener("dragover", () => {
        // console.log("dragover");
        e.preventDefault();
    });

    whitebox.addEventListener("dragenter", () => {
        // console.log("dragenter");
    });

    whitebox.addEventListener("dragleave", () => {
        // console.log("dragleave");
    });

  
    whitebox.addEventListener("drop", (e) => {
        // console.log("drop");
        e.target.append(whitebox);
    });
}