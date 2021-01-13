import { createWorkExperience } from '../utils/createWorkExperience.js';
import {workExperience} from '../utils/work.js';

const renderWorkExperience = () => {
  const container = document.querySelector('.work-projects')
  workExperience.map(work => {
    let div = createWorkExperience(work);
    container.append(div)
    console.log(div.children[1])
    div.addEventListener('mouseenter', () => onMouseEnter(div.children[1]))
    div.addEventListener('mouseleave', () => onMouseLeave(div.children[1]))
  })
  return container;
}

//work project animations 
const onMouseEnter = (p) => {
  p.style.opacity = 1;
}

const onMouseLeave = (p) => {
  p.style.opacity = 0;
}

export {renderWorkExperience};