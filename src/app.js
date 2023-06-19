const menuIcon = document.querySelector('.nav__menu-mobile')
const menuClose = document.querySelector('.close')
const menuScreen = document.querySelector('.menu__mobile-fullscreen')
const body = document.getElementsByTagName("body")[0]

menuScreen.classList.add('hidden')

menuIcon.addEventListener('click', () => {
    menuScreen.classList.remove('hidden')
    body.classList.add('disable-scroll')
})

menuClose.addEventListener('click', () =>{
    menuScreen.classList.add('hidden')
    body.classList.remove('disable-scroll')
})

// let blockArray = Array.from(block);
// blockArray.forEach(block => {



//     down.addEventListener('click', () => {
//         let tl = new TimelineMax();
//         tl.fromTo(image,1,{y: '0'}, {y: '-100vh', ease: Power1.easeInOut})
//         .fromTo(heading,1,{y: '0'}, {y: '-100vh', ease: Power1.easeInOut}, "-=0.8")
//         .fromTo(side,1,{y: '0'}, {y: '-100vh', ease: Power1.easeInOut}, "-=1")
//         .fromTo(learnmore,1,{y: '0'}, {y: '-100vh', ease: Power1.easeInOut}, "-=0.9")
//         .fromTo(desc,1,{y: '0'}, {y: '-100vh', ease: Power1.easeInOut}, "-=1")
//         .fromTo(block,1,{backgroundColor: "#ffffff"}, {backgroundColor: "#1c2136", ease: Power1.easeInOut}, "-=1")
//         .fromTo(side,1,{color: "#000000"}, {color: "#ffffff", ease: Power1.easeInOut}, "-=1")
//         setTimeout(() => {
//             logo1.classList.add('hidden')
//             logo2.classList.remove('hidden')
//             arrows1.classList.add('hidden')
//             arrows2.classList.remove('hidden')
//             heading.classList.remove('heading-text') 
//             heading.classList.add('heading-text-light')
//             desc.classList.add('lighter')
//             btn.classList.add('light')
//             btn.classList.add('border-light')
//           }, 1000);
//     })
// });

// let tl = new TimelineMax();

// tl.fromTo(image,1,{y: '900'}, {y: '0', ease: Power1.easeInOut})
// .fromTo(heading,1,{y: '900'}, {y: '0', ease: Power1.easeInOut}, "-=0.5")
// .fromTo(learnmore,1,{y: '900'}, {y: '0', ease: Power1.easeInOut}, "-=0.5")
// .fromTo(desc,1,{y: '900'}, {y: '0', ease: Power1.easeInOut}, "-=1")
// .fromTo(card,0.8,{width: '100%'}, {width: '90%', ease: Power1.easeInOut})
// .fromTo(text,1,{opacity: '0'}, {opacity: '1', ease: Power1.easeInOut}, "-=1")

// "-=3"

