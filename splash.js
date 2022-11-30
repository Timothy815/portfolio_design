
function sceneOne(){
let tl = gsap.timeline();
tl.add("begin");
tl.set("svg",{visibility:"visible"});
tl.from(".boxes", {
    duration:3.0,
    opacity: 0,
    scale: 0.01,
    y: 500,
    ease: "power2.in",
    stagger: {
      grid: [7,15],
      from: "center",
      ease:  "back",
      amount: 1
    }
  },"begin");
  return tl;
}
function sceneTwo(){
  let tl = gsap.timeline();
  tl.add("middle")
  tl.from(".blackboxes", {
    duration: 0.5,
    opacity: 0.0,
    ease: "power1.inOut",
    stagger:{
      grid: [7,15],
      from: "center",
      ease: "power2.in",
      amount: 1.5
    }
    
  },"middle");
  return tl;
}

function sceneThree(){
  let tl = gsap.timeline({yoyo:true, repeat:1, repeatDelay: 2});
  tl.add("end");
  tl.to("svg",{
   duration: 1,
    scale: 0.5,
    rotationX: 360,
    rotationY: 360,
    ease: "back.out"
  },"end");
  return tl;
}

var master = gsap.timeline();
master.add(sceneOne())
      .add(sceneTwo())
      .add(sceneThree());

