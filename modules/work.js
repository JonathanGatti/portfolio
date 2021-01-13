import {workExperience} from '../utils/work.js';

const renderWorkExperience = () => {
  const container = document.querySelector('.work-projects')
  workExperience.map(work => {
    let div = document.createElement('div');
    div.className = 'work-project';
    let title = document.createElement('h3');
    title.innerHTML = work.employer;
    let subTitle = document.createElement('h5');
    subTitle.innerHTML = work.position;
    subTitle.style.color = 'rgb(50, 169, 151)'
    div.append(title, subTitle)
    container.append(div)

    div.addEventListener('mouseenter', () => onMouseEnter(div, work))
    div.addEventListener('mouseleave', () => onMouseLeave())
  })
  return container;
}

//work project animations 
const onMouseEnter = (div, work) => {
  let description = document.createElement('p');
  description.innerHTML = work.description;
  description.className = 'description';
  div.appendChild(description);
}

const onMouseLeave = () => {
  let description = document.querySelector('.description');
  description.remove()
}

export {renderWorkExperience};