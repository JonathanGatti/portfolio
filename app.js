import {renderTechnologies} from './modules/technologies.js';
import {renderWorkExperience} from './modules/work.js';
import {renderProjects} from './modules/projects.js';

const button = document.querySelector('.about-button');

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



