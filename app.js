import {renderTechnologies} from './modules/technologies.js';
import {renderWorkExperience} from './modules/work.js';
import {renderProjects} from './modules/projects.js';

const button = document.querySelector('.about-button');
const header = document.querySelector('.header-text');

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



