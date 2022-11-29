const card1 = document.getElementById("c1");//.getAttribute("value"); //parseInt(cardVal)
const card2 = document.getElementById("c2");
const card3 = document.getElementById("c3");
let clickCount=0;

const rbtn = document.querySelector("#rbtn");
const lbtn = document.querySelector("#lbtn");

rbtn.addEventListener("click", function rightShift() {
	if(clickCount==0){
		card1.style.transform = "translateX(29.65vw) scale(100%)";	
		card1.style.zIndex= 3;
		card2.style.transform = "translateX(29.65vw) scale(50%)";	
		card2.style.zIndex= 2;
		card3.style.transform = "translateX(-59.45vw) scale(50%)";
		card3.style.zIndex= 1;
		
	
		
	}else if(clickCount==1){
		
		
		card1.style.transform = "translateX(59.35vw) scale(50%)";	
		card1.style.zIndex= 2;
		card2.style.transform = "translateX(-29.7vw) scale(50%)";
		card2.style.zIndex= 1;
		card3.style.transform = "translateX(-29.7vw) scale(100%)";	
		card3.style.zIndex= 3;

	}else if(clickCount==2){
		card1.style.transform = "translateX(0vw) scale(50%)";
		card1.style.zIndex= 2;
		card2.style.transform = "translateX(0vw) scale(100%)";	
		card2.style.zIndex= 3;
		card3.style.transform = "translateX(0vw) scale(50%)";	
		card3.style.zIndex= 1;
	}
	
	clickCount=(clickCount % 3 + 1) % 3;
	
});


lbtn.addEventListener("click", function leftShift() {
	if(clickCount==0){
		card1.style.transform = "translateX(59.35vw) scale(50%) ";	
		card1.style.zIndex= 2;
		card2.style.transform = "translateX(-29.7vw) scale(50%)";	
		card2.style.zIndex= 1;
		card3.style.transform = "translateX(-29.7vw) scale(100%)";
		card3.style.zIndex= 3;
		
		
		
	}else if(clickCount==2){
		
		
		card1.style.transform = "translateX(29.7vw) scale(100%) ";	
		card1.style.zIndex= 3;
		card2.style.transform = "translateX(29.7vw) scale(50%) ";
		card2.style.zIndex= 1;
		card3.style.transform = "translateX(-59.35vw) scale(50%) ";	
		card3.style.zIndex= 2;
		
	}else if(clickCount==1){
		card1.style.transform = "translateX(0vw) scale(50%) ";
		card1.style.zIndex= 2;
		card2.style.transform = "translateX(0vw) scale(100%) ";	
		card2.style.zIndex= 3;
		card3.style.transform = "translateX(0vw) scale(50%) ";	
		card3.style.zIndex= 1;
	}
	
	clickCount=((clickCount - 1) + 3) %3;
    
});