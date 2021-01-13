const createWorkExperience = (work) => {
  let div = document.createElement('div');
    div.className = 'work-project';
    let titleContainer = document.createElement('div')
    titleContainer.classList.add('employer')
    let title = document.createElement('h3');
    title.innerHTML = work.employer;
    let subTitle = document.createElement('h5');
    subTitle.innerHTML = work.position;
    subTitle.style.color = 'rgb(50, 169, 151)';
    titleContainer.append(title, subTitle)
    let description = document.createElement('div');
    description.innerHTML = work.description;
    description.className = 'hidden';
    div.append(titleContainer, description)

    return div;
}

export {createWorkExperience};