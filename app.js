const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const header = document.querySelector('.header');
const work = document.querySelector('.work-experience');
const button = document.querySelector('.about-button');

// intro animations
tl.to('.text', {y: '0%', duration: 1, stagger: 0.25})
tl.to('.intro', {y: '-100%', duration: 1})
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('.header', {opacity: 0}, {opacity: 1, duration: 1}, '-=1')

// work section animation
const workSectionAnimations = () => {
  tl.to('.work-title', {x: '0vw', duration: 1.3})
  tl.to('.work-hr', {x: '0vw', duration: 1.3}, '-=0.2')
  tl.to('.work-projects',  {opacity: 1, duration: 1}, '-=1')
  tl.to('.work-projects', {y: '-20%', duration: 1.3}, '-=1')
}
// technology section animations 
const technologyAnimations = () => {
  tl.to('.tech-title', {x: '0vw', duration: 1.3})
  tl.to('.tech-hr', {x: '0vw', duration: 1.3}, '-=0.2')
  tl.to('.technologies', {opacity: 1, duration: 1}, '-=1')
}


// buttons event listeners
button.addEventListener('mouseenter', () => {
  document.querySelector('i').style.transform = 'rotate(90deg)'
})

button.addEventListener('mouseleave', () => {
  document.querySelector('i').style.transform = 'rotate(0deg)'
})

button.addEventListener('click', () =>{
  window.scrollBy(0,750)
  technologyAnimations()
  workSectionAnimations()
})

document.addEventListener('scroll', () => {
  technologyAnimations()
  workSectionAnimations()
})




