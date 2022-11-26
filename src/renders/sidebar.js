import toDoLogo from '../assets/images/to-do-list-logo.png';
import plusButton from '../assets/icons/plus-button.png';
import getProjectNameData from '../functions/getProjectNameData';

export default function sidebar() {
  const sidebarContainer = document.createElement('div');
  sidebarContainer.id = 'sidebar-container';
  const toDoLogoImg = new Image();
  toDoLogoImg.src = toDoLogo;
  toDoLogoImg.id = 'sidebar-logo';
  sidebarContainer.appendChild(toDoLogoImg);
  const addProjectContainer = document.createElement('div');
  addProjectContainer.id = 'add-project-container';
  addProjectContainer.appendChild(replaceInputWithText());
  sidebarContainer.appendChild(addProjectContainer);
  const plusButtonIcon = new Image();
  plusButtonIcon.id = 'sidebar-plus-button';
  plusButtonIcon.src = plusButton;
  plusButtonIcon.onclick = () => {
    changeChildNode(addProjectContainer);
  };
  addProjectContainer.appendChild(plusButtonIcon);
  const projectCardContainer = document.createElement('div');
  projectCardContainer.id = 'project-card-container';
  sidebarContainer.appendChild(projectCardContainer);

  return sidebarContainer;
}

const changeChildNode = (addProjectContainer) => {
  if (
    addProjectContainer.childNodes[0]
        === document.getElementsByClassName('add-project-text')[0]
  ) {
    addProjectContainer.replaceChild(
      replaceTextWithInput(),
      document.getElementsByClassName('add-project-text')[0],
    );
  } else if (
    addProjectContainer.childNodes[0]
            === document.getElementsByClassName('add-project-input')[0]
        && document.getElementsByClassName('add-project-input')[0].value.length > 0
  ) {
    getProjectNameData(
      document.getElementsByClassName('add-project-input')[0].value,
    );
    addProjectContainer.replaceChild(
      replaceInputWithText(),
      document.getElementsByClassName('add-project-input')[0],
    );
  } else {
    alert('Please enter a project title');
  }
};
const replaceTextWithInput = () => {
  const projectNameInput = document.createElement('input');
  projectNameInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      const addProjectsContainer = document.getElementById('add-project-container');
      changeChildNode(addProjectsContainer);
    }
  });
  projectNameInput.classList.add('add-project-input');
  projectNameInput.placeholder = 'Project name...';
  return projectNameInput;
};
const replaceInputWithText = () => {
  const addProjectText = document.createElement('h4');
  addProjectText.classList.add('add-project-text');
  addProjectText.innerHTML = 'Add a project';
  addProjectText.onclick = () => {
    changeChildNode(document.getElementById('add-project-container'));
  };
  return addProjectText;
};
