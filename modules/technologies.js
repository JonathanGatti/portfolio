import {tl} from './timeline.js';
import {technologies} from '../utils/technologies.js'

const  renderTechnologies = () => {
  let container = document.querySelector('.technologies');

  technologies.map(tech => {
    let icon = document.createElement('i')
    icon.className = tech.icon;
    let name = document.createElement('p')
    name.innerHTML = tech.name;
    let div = document.createElement('div')
    div.className='technology';
    div.append(icon, name)
    container.appendChild(div)
  })
  return container
}

const technologyAnimations = () => {
  tl.to('.tech-title', {x: '0vw', duration: 1.2})
  tl.to('.tech-hr', {x: '0vw', duration: 1}, '-=0.1')
  tl.to('.technologies', {opacity: 1, duration: 1}, '-=1')
}
export {renderTechnologies, technologyAnimations}
 