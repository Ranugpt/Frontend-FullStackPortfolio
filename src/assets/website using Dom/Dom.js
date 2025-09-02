gsap.from("#page1 img",{
    width:"28%",
   top:"86%",
    duration: 1,
    scale: 1,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        scrub:2,
        start:"top 0%",
        end:"top -70",
        pin: true
    }
});
var element = document.querySelectorAll('.element')

element.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        gsap.to("#more",{
            opacity:1,
            transform: `translate(-50%,-50%) scale(1)`
        })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to("#more",{
            opacity:0,
            transform:` translate(-50%,-50%) scale(0)`
        })
    })
})
var page2Elements = document.querySelector(".page2-elements")

var rect = page2Elements.getBoundingClientRect()

var elemX = rect.x
var elemY = rect.y


page2Elements.addEventListener("mousemove",function(dets){
    gsap.to("#more",{
        x:dets.x-elemX,
        y:dets.y-elemY
    })
})

gsap.to("#page4 #img1",{
    scale:0.85,
    filter: 'brightness(0.8)',
    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 5%",
        end:"top -50%",
        scrub:true
    }
})

gsap.to("#page4 #img2",{
    scale:0.85,
    filter: 'brightness(0.8)',
    scrollTrigger:{
        trigger:"#img2",
        scroller:"body",
        start:"top 5%",
        end:"top -50%",
        scrub:true
    }
})

gsap.to("#page4 #img3",{
    scale:0.85,
    filter: 'brightness(0.8)',
    scrollTrigger:{
        trigger:"#img3",
        scroller:"body",
        start:"top 5%",
        end:"top -50%",
        scrub:true
    }
})
gsap.to("#page4 #img4",{
    scale:0.85,
    filter: 'brightness(0.8)',
    scrollTrigger:{
        trigger:"#img4",
        scroller:"body",
        start:"top 5%",
        end:"top -50%",
        scrub:true
    }
})


var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});