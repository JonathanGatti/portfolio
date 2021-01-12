import {projects} from '../utils/projects.js';
import {createLinksContainer} from '../utils/createLinksContainer.js';


const renderProjects = () => {
  const container = document.querySelector('.projects');
  projects.map(project => {
    let div = document.createElement('div');
    div.className = 'project';
    let title = document.createElement('h3');
    title.innerHTML = project.title;
    title.className= 'project-title'
    let img = document.createElement('img');
    img.className = 'project-img'
    img.src = project.imgSrc;
    let linksContainer = createLinksContainer(project);
    div.append(title, img, linksContainer);
    container.appendChild(div)

    div.addEventListener('mouseenter', () => onMouseEnter(title, img, linksContainer))
    div.addEventListener('mouseleave', () => onMouseLeave(title, img, linksContainer))
  })

  return container;
}

//projects  animations
const onMouseEnter = (title, img, linksContainer) => {
  title.style.transform = 'translateY(100px)'
  title.style.opacity = 1;
  img.style.opacity = 0;
  linksContainer.style.opacity = 1;
  linksContainer.style.transform = 'translateY(-100px)';
}

const onMouseLeave = (title, img, linksContainer) => {
  title.style.transform = 'translateY(0)';
  title.style.opacity = 0;
  img.style.opacity = 1;
  linksContainer.style.opacity = 0;
  linksContainer.style.transform = 'translateY(0px)';
} 

export {renderProjects};