import getEditFormData from '../functions/getEditFormData';

const editForm = (todo, appContainer) => {
  const opacityContainer = document.createElement('div');
  opacityContainer.classList.add('opacity-container');
  const formContainer = document.createElement('form');
  formContainer.id = 'form-container';
  formContainer.style.display = 'grid';
  const titleLabel = document.createElement('label');
  titleLabel.for = 'form-title';
  titleLabel.innerHTML = 'Title';
  formContainer.appendChild(titleLabel);
  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'form-title';
  titleInput.value = todo.title;
  formContainer.appendChild(titleInput);
  const descriptionLabel = document.createElement('label');
  descriptionLabel.for = 'form-description';
  descriptionLabel.innerHTML = 'Description';
  formContainer.appendChild(descriptionLabel);
  const descriptionInput = document.createElement('input');
  descriptionInput.type = 'text';
  descriptionInput.id = 'form-description';
  descriptionInput.value = todo.description;
  formContainer.appendChild(descriptionInput);
  const dueDateLabel = document.createElement('label');
  dueDateLabel.for = 'due-date';
  dueDateLabel.innerHTML = 'Due date';
  formContainer.appendChild(dueDateLabel);
  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'due-date';
  dueDateInput.value = todo.dueDate;
  formContainer.appendChild(dueDateInput);
  const priorityLabel = document.createElement('label');
  priorityLabel.innerHTML = 'Priority level';
  formContainer.appendChild(priorityLabel);
  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'priority';
  prioritySelect.name = 'priority';
  const priorityHigh = document.createElement('option');
  priorityHigh.value = 'High';
  priorityHigh.innerHTML = 'High';
  prioritySelect.appendChild(priorityHigh);
  const priorityMedium = document.createElement('option');
  priorityMedium.value = 'Medium';
  priorityMedium.innerHTML = 'Medium';
  prioritySelect.appendChild(priorityMedium);
  const priorityLow = document.createElement('option');
  priorityLow.value = 'Low';
  priorityLow.innerHTML = 'Low';
  prioritySelect.appendChild(priorityLow);
  formContainer.appendChild(prioritySelect);
  if (todo.priority === 'High') {
    priorityHigh.selected = 'selected';
  } else if (todo.priority === 'Medium') {
    priorityMedium.selected = 'selected';
  } else if (todo.priority === 'Low') {
    priorityLow.selected = 'selected';
  }
  const formButton = document.createElement('button');
  formButton.id = 'form-submit-button';
  formButton.type = 'submit';
  formButton.innerHTML = 'Save';
  formButton.onclick = () => {
    getEditFormData(
      titleInput.value,
      descriptionInput.value,
      dueDateInput.value,
      prioritySelect.value,
      todo.projectId,
      todo.toDoId,
    );
    formContainer.reset();
    appContainer.removeChild(opacityContainer);
    return false;
  };
  formContainer.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      getEditFormData(
        titleInput.value,
        descriptionInput.value,
        dueDateInput.value,
        prioritySelect.value,
        todo.projectId,
        todo.toDoId,
      );
      formContainer.reset();
      appContainer.removeChild(opacityContainer);
      return false;
    }
  });
  const cancelButton = document.createElement('button');
  cancelButton.id = 'cancel-button';
  cancelButton.innerHTML = 'X';
  cancelButton.onclick = () => {
    appContainer.removeChild(opacityContainer);
    return false;
  };
  formContainer.appendChild(cancelButton);
  formContainer.appendChild(formButton);
  opacityContainer.appendChild(formContainer);

  return opacityContainer;
}

export default editForm;