export const createLinksContainer = (project) => {
  let linksContainer = document.createElement('div')
  linksContainer.className = 'links-container';
  let link = document.createElement('a');
  link.innerText = 'link';
  link.className = 'project-link';
  link.href = project.href;
  link.setAttribute('target', 'blank')
  let code = document.createElement('a');
  code.innerText = 'code';
  code.className = 'project-link';
  code.href = project.codeUrl;
  code.setAttribute('target', 'blank')
  linksContainer.append(link, code)
  return linksContainer;
}