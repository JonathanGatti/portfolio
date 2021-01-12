export const createLinksContainer = (project) => {
  let linksContainer = document.createElement('div')
  linksContainer.className = 'links-container';
  let link = document.createElement('a');
  link.innerText = 'link';
  link.className = 'project-link';
  link.href = project.href;
  let code = document.createElement('a');
  code.innerText = 'code';
  code.className = 'project-link';
  code.href = project.codeUrl;
  linksContainer.append(link, code)
  return linksContainer;
}