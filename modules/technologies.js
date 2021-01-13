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

export {renderTechnologies}
 