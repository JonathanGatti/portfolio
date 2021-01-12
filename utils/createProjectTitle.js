export const createProjectTitle = (project) => {
  let container = document.createElement('div');
  container.className = 'title-container'
  let title = document.createElement('h3');
  title.innerHTML = project.title;
  title.className= 'project-title';
  let subTitle = document.createElement('h5');
  subTitle.className = 'project-subtitle';
  subTitle.innerText = project.tech;
  container.append(title, subTitle);
  return container;
}