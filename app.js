import {renderTechnologies} from './modules/technologies.js';
import {renderWorkExperience} from './modules/work.js';
import {renderProjects} from './modules/projects.js';
import {tl} from './modules/timeline.js';

const button = document.querySelector('.about-button');

// // intro animations
// tl.to('.text', {y: '0%', duration: 1, stagger: 0.25})
// tl.to('.intro', {y: '-100%', duration: 1})
// tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1})
// tl.fromTo('.header', {opacity: 0}, {opacity: 1, duration: 1}, '-=1')

// work section animations
const workSectionAnimations = () => {
  tl.to('.work-title', {x: '0vw', duration: 1.2})
  tl.to('.work-hr', {x: '0vw', duration: 1}, '-=0.1')
  tl.to('.work-projects',  {opacity: 1, duration: 1}, '-=1')
}

// button event listeners
button.addEventListener('mouseenter', () => {
  document.querySelector('#arrow').style.transform = 'rotate(90deg)'
})

button.addEventListener('mouseleave', () => {
  document.querySelector('#arrow').style.transform = 'rotate(0deg)'
})

// render modules
renderProjects();
renderWorkExperience();
renderTechnologies();



