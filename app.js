const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
const body = document.querySelector('body');
const header = document.querySelector('.header');
const work = document.querySelector('.work-experience');
const button = document.querySelector('.about-button');

tl.to('.text', {y: '0%', duration: 1, stagger: 0.25})
tl.to('.intro', {y: '-100%', duration: 1})
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('.header', {opacity: 0}, {opacity: 1, duration: 1}, '-=1')

// window.addEventListener('scroll', function() {
//   document.querySelector('.header').innerHTML = window.pageYOffset + 'px';
// });

button.addEventListener('mouseenter', () => {
  document.querySelector('i').className='fas fa-arrow-down';
})

button.addEventListener('mouseleave', () => {
  document.querySelector('i').className='fas fa-arrow-right';
})

button.addEventListener('click', () =>{
  window.scrollBy(0,750)
})



