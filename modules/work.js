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
    div.append(title, subTitle)
    container.append(div)
  })
  return container;
}

export {renderWorkExperience};