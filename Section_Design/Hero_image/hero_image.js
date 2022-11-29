const out = document.querySelector(".output");

const run = document.querySelector(".run");

const scrollDown = document.getElementById("scrollDown");
const scrollUp = document.getElementById("scrollto");
run.addEventListener("click", function runMe(){
	
	if(out.style.opacity==0){
		out.style.visibility="visible";
		out.style.opacity=1;
	}else{
		out.style.visibility="hidden";
		out.style.opacity=0;
	}
	
});
let html = document.getElementsByTagName("html");
scrollDown.addEventListener("click", () => {
	html.velocity({
		properties: {scrollTop: "1300px"},
		options: {duration: 300, speed: 2 , easing: "ease-in-out"}  //[50,5]
	});
});

scrollUp.addEventListener("click", () => {
	html.velocity({
		properties: {scrollTop: "0px"},
		options: {duration: 300, speed: 2, easing: "spring"}  //[50,5]
	});
});