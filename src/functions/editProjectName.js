import { renderProjects } from '../renders/renderProjects';

const editProjectName = (
  projectCard,
  projectCardTitleContainer,
  project,
  iconContainer,
  projectLibrary,
) => {
  const copyOfProjectLibrary = projectLibrary;
  const editNameContainer = document.createElement('div');
  editNameContainer.classList.add('edit-name-container');
  const editNameInput = document.createElement('input');
  editNameInput.value = projectCardTitleContainer.firstChild.innerHTML;
  editNameInput.onclick = (event) => {
    event.stopPropagation();
  };
  const saveChanges = document.createElement('button');
  saveChanges.innerHTML = 'save';
  saveChanges.onclick = (event) => {
    event.stopPropagation();
    for (let i = 0; i < copyOfProjectLibrary.length; i += 1) {
      if (copyOfProjectLibrary[i].projectId === project.projectId) {
        copyOfProjectLibrary[i].projectName = editNameInput.value;
        localStorage.setItem(
          'projectLibrary',
          JSON.stringify(copyOfProjectLibrary),
        );
        renderProjects(
          copyOfProjectLibrary,
          'edit',
          copyOfProjectLibrary[i].projectId,
        );
      }
    }
  };
  editNameContainer.appendChild(editNameInput);
  editNameContainer.appendChild(saveChanges);
  projectCard.replaceChild(editNameContainer, projectCardTitleContainer);
  projectCard.removeChild(iconContainer);
};
export default editProjectName;
