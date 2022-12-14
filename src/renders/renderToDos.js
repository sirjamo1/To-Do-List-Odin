import trashBin from '../assets/icons/trash-bin.png';
import editIcon from '../assets/icons/edit-icon.png';
import completedIcon from '../assets/icons/completed-icon.png';
import yesOrNoPopUp from '../popupForms/yesOrNoPopUp';
import editForm from '../popupForms/editForm';

const renderToDos = (toDoArray, newEditDelete, newEditDeleteId) => {
  const appContainer = document.getElementById('app-container');
  const toDoContainer = document.getElementById('to-do-container');
  while (toDoContainer.firstChild) {
    toDoContainer.removeChild(toDoContainer.lastChild);
  }
  toDoArray.forEach((toDo) => {
    const toDoCard = document.createElement('div');
    toDoCard.classList = toDo.completed === false ? 'to-do-card' : 'to-do-card line-through';
    if (
      (newEditDelete === 'new' && newEditDeleteId === toDo.toDoId)
            || (newEditDelete === 'edit' && newEditDeleteId === toDo.toDoId)
    ) {
      toDoCard.style.animation = 'add-edit forwards 1.5s linear';
    }
    const title = document.createElement('h1');
    title.innerHTML = toDo.title.length < 10
      ? toDo.title
      : `${toDo.title.substring(0, 10)}...`;
    toDoCard.appendChild(title);
    const toDoDescription = document.createElement('h4');
    toDoDescription.innerHTML = toDo.description;
    toDoCard.appendChild(toDoDescription);
    const toDoDueDate = document.createElement('p');
    toDoDueDate.innerHTML = toDo.dueDate;
    toDoCard.appendChild(toDoDueDate);
    const toDoPriority = document.createElement('p');
    toDoPriority.innerHTML = toDo.priority;
    toDoPriority.classList.add(`priority-${toDo.priority.toLowerCase()}`);
    toDoCard.appendChild(toDoPriority);
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('to-do-icon-container');
    const toDoEditButton = new Image();
    toDoEditButton.src = editIcon;
    toDoEditButton.onclick = () => {
      appContainer.appendChild(editForm(toDo, appContainer));
    };
    iconContainer.appendChild(toDoEditButton);
    const toDoCompletedButton = new Image();
    toDoCompletedButton.src = completedIcon;
    toDoCompletedButton.onclick = () => {
      const projectLibrary = JSON.parse(
        localStorage.getItem('projectLibrary'),
      );
      addRemoveLineThrough(projectLibrary, toDo.toDoId);
    };
    iconContainer.appendChild(toDoCompletedButton);
    const toDoDeleteButton = new Image();
    toDoDeleteButton.src = trashBin;
    toDoDeleteButton.onclick = () => {
      const projectLibrary = JSON.parse(
        localStorage.getItem('projectLibrary'),
      );
      appContainer.appendChild(
        yesOrNoPopUp(
          toDo,
          appContainer,
          toDoCard,
          toDoContainer,
          projectLibrary,
        ),
      );
    };
    iconContainer.appendChild(toDoDeleteButton);
    toDoCard.appendChild(iconContainer);
    toDoContainer.appendChild(toDoCard);
  });
};
const addRemoveLineThrough = (projectLibrary, toDoId) => {
  const copyOfProjectLibrary = projectLibrary;
  for (let i = 0; i < copyOfProjectLibrary.length; i += 1) {
    for (let j = 0; j < copyOfProjectLibrary[i].toDos.length; j += 1) {
      if (copyOfProjectLibrary[i].toDos[j].toDoId === toDoId) {
        copyOfProjectLibrary[i].toDos[j].completed = !projectLibrary[i].toDos[j].completed;
        localStorage.setItem(
          'projectLibrary',
          JSON.stringify(copyOfProjectLibrary),
        );
        renderToDos(copyOfProjectLibrary[i].toDos);
      }
    }
  }
};
export default renderToDos;
