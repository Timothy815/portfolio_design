let btn = document.querySelector(".scrollbtn");
let mydiv = document.querySelector(".mainText");
btn.addEventListener("click", ()=>{
	gsap.to(mydiv, {duration: 2, scrollTo: {y:"#A", offsetY: 0}, ease:"elastic"});
});

let btn2 = document.querySelector(".scrollbtn2");
 
btn2.addEventListener("click", ()=>{
	gsap.to(mydiv, {duration: 2, scrollTo: {y:"#B", offsetY: 10}, ease:"elastic"});
});

let btn3 = document.querySelector(".scrollbtn3");

btn3.addEventListener("click", ()=>{
	gsap.to(mydiv, {duration: 2, scrollTo: {y:"#C", offsetY: 10}, ease:"elastic"});
});