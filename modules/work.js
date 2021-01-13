import {workExperience} from '../utils/work.js';

const renderWorkExperience = () => {
  const container = document.querySelector('.work-projects')
  workExperience.map(work => {
    let div = document.createElement('div');
    div.className = 'work-project';
    let titleContainer = document.createElement('div')
    titleContainer.classList.add('employer')
    let title = document.createElement('h3');
    title.innerHTML = work.employer;
    let subTitle = document.createElement('h5');
    subTitle.innerHTML = work.position;
    subTitle.style.color = 'rgb(50, 169, 151)';
    titleContainer.append(title, subTitle)
    let description = document.createElement('p');
    description.innerHTML = work.description;
    description.className = 'hidden';
    div.append(titleContainer, description)
    container.append(div)

    div.addEventListener('mouseenter', () => onMouseEnter(description))
    div.addEventListener('mouseleave', () => onMouseLeave(description))
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