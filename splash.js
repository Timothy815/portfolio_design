

let mainAnimation = gsap.timeline({repeat:0, repeatDelay:1});
mainAnimation.set("svg",{visibility:"visible"});
mainAnimation.from(".boxes", {
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
  });
  mainAnimation.from(".blackboxes", {
    duration: 1,
    opacity: 0.0,
    ease: "power1.inOut",
    stagger:{
      grid: [7,15],
      from: "center",
      ease: "power2.in",
      amount: 1.5
    }
    
  });

mainAnimation.to("svg",{
  duration: 1,
  scale: 0.5,
  ease: "back.out"
});