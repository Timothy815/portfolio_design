
function sceneOne(){
let tl = gsap.timeline();
tl.add("begin");
tl.set("svg",{visibility:"visible"});
tl.from(".boxes", {
    duration: 2,
    opacity: 0,
    scale: 0.05,
    y: 40,
    ease: "power1.inOut",
    stagger: {
      grid: [7,15],
      from: "center",
      ease:  "power2.in",
      amount: 1.5
    }
  },"begin");
  return tl;
}
function sceneTwo(){
  let tl = gsap.timeline();
  tl.add("middle")
  tl.from(".blackboxes", {
    duration: 1,
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
  let tl = gsap.timeline();
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

var master = gsap.timeline({yoyo:true, repeat:1, repeatDelay: 2});
master.add(sceneOne())
      .add(sceneTwo())
      .add(sceneThree());

