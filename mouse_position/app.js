let screenLog = document.querySelector("#screen-log");
let box = document.querySelectorAll(".box");
document.addEventListener("mousemove", logKey);
let x ;
let y;
function logKey(e){
    x = e.clientX;
    y = e.clientY;
      
    //box.style.transform = `translate(${x - 25}px,${y - 50}px)`;
    for(let i = 0; i<2;i++){
    let xpos = box[i].getBoundingClientRect().x+25;
    let ypos = box[i].getBoundingClientRect().y+25;
    if((Math.round(Math.abs(x-xpos))/100<1 && Math.round(Math.abs(x-xpos))/100>0) && (Math.round(Math.abs(y-ypos))/100<1 && Math.round(Math.abs(y-ypos))/100>0)){
        box[i].style.transform = ` scale(${1-(Math.round(Math.abs(x-xpos))/100)+1})`;
    }else{
        box[i].style.transform = ` scale(${1})`;
    }
}
   // box.innerHTML =`${Math.round(Math.abs(x-xpos))/100},${Math.round(Math.abs(y-ypos))/100}`;//`(${x},${y})`; 
}
    
//box.style.transform = `translate(${x - 50}px,${y - 120}px)`;
//  Screen X/Y: ${e.screenX}, ${e.screenY}