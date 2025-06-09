// main cursor
let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x +30+"px"
    crsr.style.top = dets.y+"px"  
    blur.style.left = dets.x -130 + "px"
    blur.style.top = dets.y -130 + "px"
})

// nav scroll 
gsap.to("#nav",{
    backgroundColor :"#000",
    height:"110px",
    duration : 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})


gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub : 2
    }
})


let All = document.querySelectorAll("#nav h4")
All.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
       elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 3
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
})
})

// scroll
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

  gsap.from("#colan1",{
     y:-70,
     x:-70,
     scrollTrigger:{
     trigger:"#colan1",
     scroller:"body",
     start:"top 50%",
     end:"top 70%",
     scrub:4
      }
  })

gsap.from("#colan2",{
     y:70,
     x:70,
     scrollTrigger:{
     trigger:"#colan1",
     scroller:"body",
     start:"top 55%",
     end:"top 40%",
     scrub:4
      }
  })

gsap.from("#page4 h1",{
     y:50,
       scrollTrigger:{
      trigger:"#page4 h1",
      scroller:"body",
      start:"top 75%",
      end:"top 70%",
      scrub:3
       }
   })

