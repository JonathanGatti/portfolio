const projects = [
  {
    title: 'The Football App',
    imgSrc: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Twitch Clone',
    imgSrc: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Web Framework',
    imgSrc: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
]

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
    div.appendChild(title);
    div.appendChild(img);
    container.appendChild(div)
  })
  projectAnimations()

  return container;
}

//project animations
const projectAnimations = () => {
    let imgs = document.querySelectorAll('.project-img')
    let arr = [...imgs]
    arr.map(img => {
      img.addEventListener('mouseenter', () => {
        let titles = [...document.querySelectorAll('.project-title')]
        titles.map(title => {
          title.style.transform = 'translateY(100px)'
        })
      })
      img.addEventListener('mouseleave', () => {
        let titles = [...document.querySelectorAll('.project-title')]
        titles.map(title => {
          title.style.transform = 'translateY(0px)'
        })
      })
    })
}



export {renderProjects};