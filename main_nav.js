const el = document.getElementById("pf");

const navEl = document.getElementById("portfolio_DD");


el.addEventListener('click', function handleMouseOver() {
  
  if(navEl.style.opacity==0.0){

  navEl.style.top = "170px";
  navEl.style.height = "2.5rem";
  navEl.style.opacity = 1.0;
  
  }else{
  navEl.style.top = "0px";
  navEl.style.height = "0rem";
  navEl.style.opacity = 0.0;
  
  }
});








//let menubtn= document.getElementById("home");
let menubtn= document.getElementsByClassName("button_container");

let typebtn2 = document.getElementById("typeIt2");
let output = document.getElementById("output");



let btnvals = ["cd ~", "cd PORTFOLIO", "cd CONTACT", "cd BIOGRAPHY", "cd EDUCATION","cd CREDENTIALS", "cd SETTINGS","cd PORTFOLIO/PROGRAMMING", "cd PORTFOLIO/PROGRAMMING","cd PORTFOLIO/WEB_DESIGN","cd PORTFOLIO/DATABASE","cd PORTFOLIO/ALGORITHMS","cd PORTFOLIO/GRAPHIC_DESIGN"];


let interval;
let delInt;
function typemsg(msg, delay, pause=2000,autodelete=1){
  clearInterval(interval);
  clearInterval(delInt);
  
  let i=0;
  interval = setInterval(()=>{
    output.innerHTML += msg[i];
    i++;
    
    if(i===msg.length){
      clearInterval(interval);
      return 0;
    }
  }, delay);
  if(autodelete===1){
    delInt = setInterval(()=>{
      deleteText(output, 20);
    }
      , pause)
  }
}

//function typedArraySequence(arr, typeDelay, sentenceDelay){
//let ivl;
//output.innerHTML ="";
//
//clearInterval(ivl);
//let count = 0;
//typemsg(arr[count],typeDelay)
//ivl = setInterval(function () {
//  count++;
//  typemsg(arr[count],typeDelay);
//  
//  if(count===arr.length){
//    clearInterval(ivl);
//    return 0;
//  }
//}, sentenceDelay);
//}

function deleteText(element, delay){
  let intDelete;
  clearInterval(intDelete);
  clearInterval(interval);
  let len = output.innerHTML.length;
  let msg = output.innerHTML
  let i = 0;
  intDelete = setInterval(()=>{
    element.innerHTML = msg.slice(0, len-i);
    i++;
    if(i===len+1){
      clearInterval(intDelete);
    }
  }, delay)
  
}

//
//typebtn.addEventListener("mouseover", ()=>{
//// output.innerHTML ="";
//
////deleteText(output, 50);
//
//typedArraySequence(words, 20, 1700);
//
//
//
//});



for(let i=0;i<menubtn.length; i++){
  menubtn[i].addEventListener("mouseenter", function(){
    output.innerHTML ="";
    
    typemsg(btnvals[i],30, 2000,1);
    
  });
}




