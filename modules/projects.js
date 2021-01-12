const projects = [
  {
    title: 'The Football App',
    imgSrc: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb3RiYWxsfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
    href: 'https://jonathangatti.github.io/football-app-v3/#/'
  },
  {
    title: 'Twitch Clone',
    imgSrc: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    href: 'https://jonathangatti.github.io/football-app-v3/#/'

  },
  {
    title: 'Web Framework',
    imgSrc: 'https://images.unsplash.com/photo-1553964125-e03d833522b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlYiUyMGZyYW1ld29ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    href: 'https://jonathangatti.github.io/football-app-v3/#/'
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
    let link = document.createElement('a');
    link.innerText = 'link';
    link.className = 'project-link';
    link.href = project.href;
    div.append(title, img, link);
    container.appendChild(div)

    div.addEventListener('mouseenter', () => onMouseEnter(title, img, link))
    div.addEventListener('mouseleave', () => onMouseLeave(title, img, link))
  })

  return container;
}

//img styles
const onMouseEnter = (title, img, link) => {
  title.style.transform = 'translateY(100px)'
  title.style.opacity = 1;
  img.style.opacity = 0;
  link.style.opacity = 1;
  link.style.transform = 'translateY(-100px)'
}

const onMouseLeave = (title, img, link) => {
  title.style.transform = 'translateY(0)';
  title.style.opacity = 0;
  img.style.opacity = 1;
  link.style.opacity = 0;
  link.style.transform = 'translateY(0px)'

} 

export {renderProjects};