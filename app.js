const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const body = document.querySelector('body');
const arrow = document.querySelector('.arrow');

tl.to('.text', {y: '0%', duration: 1, stagger: 0.25})
tl.to('.intro', {y: '-100%', duration: 1})
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1}, '-=1')

document.addEventListener('scroll', () => {
  tl.to('.project', {x: '10%', duration: 1, stagger: 0.25})
})
