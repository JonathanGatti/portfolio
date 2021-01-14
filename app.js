import {renderTechnologies} from './modules/technologies.js';
import {renderWorkExperience} from './modules/work.js';
import {renderProjects} from './modules/projects.js';

const button = document.querySelector('.about-button');
const header = document.querySelector('.header-text');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('mouseenter', () => {
  hamburger.style.transform= 'rotate(90deg)'
  navLinks.classList.add('show');
  navLinks.style.transform = 'translate(-30px, 25px)'
})

navLinks.addEventListener('mouseenter', () => {
  navLinks.classList.add('show');
})

navLinks.addEventListener('mouseleave', () => {
  navLinks.classList.remove('show');
})

hamburger.addEventListener('mouseleave', () => {
  hamburger.style.transform= 'rotate(0deg)'
  navLinks.classList.remove('show')
})

const headerAnimation = () => {
  header.style.opacity = 1;
}

window.onLoad = headerAnimation()

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



