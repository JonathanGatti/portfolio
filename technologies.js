 const technologies = [
  {
    icon: 'fab fa-html5 fa-5x',
    name: 'HTML5'
  },
  {
    icon: 'fab fa-css3-alt fa-5x',
    name: 'CSS3'
  },
  {
    icon: 'fab fa-js-square fa-5x',
    name: 'JavaScript'
  },
  {
    icon: 'fab fa-react fa-5x',
    name: 'React'
  },
  {
    icon: 'fab fa-node fa-5x',
    name: 'Node.js'
  }
]

function renderTechnologies() {
  let container = document.querySelector('.technologies');

  technologies.map(tech => {
    let icon = document.createElement('i')
    icon.className = tech.icon;
    let name = document.createElement('p')
    name.innerHTML = tech.name;
    let div = document.createElement('div')
    div.className='technology';
    div.appendChild(icon)
    div.appendChild(name)
    container.appendChild(div)
  })
  return container
}
export {renderTechnologies}
 