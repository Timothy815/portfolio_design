const card1 = document.getElementById("c1");
const card2 = document.getElementById("c2");
const card3 = document.getElementById("c3");
const card4 = document.getElementById("c4");
const card5 = document.getElementById("c5");
let clickCount=0;

const rbtn = document.querySelector("#rbtn");
const lbtn = document.querySelector("#lbtn");

rbtn.addEventListener("click", function rightShift() {
	
	card1.style.zIndex= 0;
	card2.style.zIndex= 0;
	card3.style.zIndex= 0;
	card4.style.zIndex= 0;
	card5.style.zIndex= 0;
	if(clickCount==0){
		card1.style.transform = "translateX(18vw) scale(60%)";	
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(18vw) scale(100%)";	
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(18vw) scale(60%)";
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(18vw) scale(50%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(-72vw) scale(50%)";
		card5.style.zIndex= 1;
		
	
		
	}else if(clickCount==1){
		
		card1.style.transform = "translateX(36.5vw) scale(100%)";	
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(36.5vw) scale(60%)";	
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(36.5vw) scale(50%)"; 
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(-53.5vw) scale(50%)";
		card4.style.zIndex= 1;
		card5.style.transform = "translateX(-56.2vw) scale(60%)";
		card5.style.zIndex= 5;
		
	}else if(clickCount==2){
		card1.style.transform = "translateX(55vw) scale(60%)";
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(55vw) scale(50%)";
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(-35.1vw) scale(50%)";
		card3.style.zIndex= 1;
		card4.style.transform = "translateX(-37.8vw) scale(60%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(-37.2vw) scale(100%)";
		card5.style.zIndex= 5;
		
	}else if(clickCount==3){
		
		card1.style.transform = "translateX(73.45vw) scale(50%)";
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(-16.58vw) scale(50%)";
		card2.style.zIndex= 1;
		card3.style.transform = "translateX(-19.45vw) scale(60%)";///5->1;4->3;3->4;2->5;1->2
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(-18.8vw) scale(100%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(-18.75vw) scale(60%)";
		card5.style.zIndex= 5;
	}else if(clickCount==4){
		
		card1.style.transform = "translateX(0vw) scale(50%)";	
		card1.style.zIndex= 1;
		card2.style.transform = "translateX(0vw) scale(70%)";	
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(0vw) scale(100%)";
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(0vw) scale(70%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(0vw) scale(50%)";
		card5.style.zIndex= 1;
	}
	
	clickCount=(clickCount % 5 + 1) % 5;
	
});


lbtn.addEventListener("click", function leftShift() {
	clickCount=((clickCount - 1) + 5) %5;
	card1.style.zIndex= 0;
	card2.style.zIndex= 0;
	card3.style.zIndex= 0;
	card4.style.zIndex= 0;
	card5.style.zIndex= 0;
	if(clickCount==1){
		card1.style.transform = "translateX(18vw) scale(60%)";	
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(18vw) scale(100%)";	
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(18vw) scale(60%)";
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(18vw) scale(50%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(-72vw) scale(50%)";
		card5.style.zIndex= 1;
		
		
		
	}else if(clickCount==2){
		
		card1.style.transform = "translateX(36.5vw) scale(100%)";	
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(36.5vw) scale(60%)";	
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(36.5vw) scale(50%)"; 
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(-53.5vw) scale(50%)";
		card4.style.zIndex= 1;
		card5.style.transform = "translateX(-56.2vw) scale(60%)";
		card5.style.zIndex= 5;
		
	}else if(clickCount==3){
		card1.style.transform = "translateX(55vw) scale(60%)";
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(55vw) scale(50%)";
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(-35.1vw) scale(50%)";
		card3.style.zIndex= 1;
		card4.style.transform = "translateX(-37.8vw) scale(60%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(-37.2vw) scale(100%)";
		card5.style.zIndex= 5;
		
	}else if(clickCount==4){
		
		card1.style.transform = "translateX(73.45vw) scale(50%)";
		card1.style.zIndex= 5;
		card2.style.transform = "translateX(-16.58vw) scale(50%)";
		card2.style.zIndex= 1;
		card3.style.transform = "translateX(-19.45vw) scale(60%)";///5->1;4->3;3->4;2->5;1->2
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(-18.8vw) scale(100%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(-18.75vw) scale(60%)";
		card5.style.zIndex= 5;
	}else if(clickCount==0){
		
		card1.style.transform = "translateX(0vw) scale(50%)";	
		card1.style.zIndex= 1;
		card2.style.transform = "translateX(0vw) scale(70%)";	
		card2.style.zIndex= 5;
		card3.style.transform = "translateX(0vw) scale(100%)";
		card3.style.zIndex= 5;
		card4.style.transform = "translateX(0vw) scale(70%)";
		card4.style.zIndex= 5;
		card5.style.transform = "translateX(0vw) scale(50%)";
		card5.style.zIndex= 1;
	}
	
	

    
});