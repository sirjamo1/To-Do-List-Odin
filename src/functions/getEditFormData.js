import { renderToDos } from '../renders/renderToDos';
import { idGenerator } from './idGenerator';

class ToDo {
  constructor(title, description, dueDate, priority, projectId, toDoId) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectId = projectId;
    this.toDoId = toDoId || `${projectId}-${idGenerator()}`;
    this.completed = false;
  }
}
const getEditFormData = (
  title,
  description,
  dueDate,
  priority,
  projectId,
  toDoId,
) => {
  if (title === '' || description === '' || dueDate === '') {
    alert('Please fill in all fields');
  } else {
    const newToDo = new ToDo(
      title,
      description,
      dueDate,
      priority,
      projectId,
      toDoId,
    );
    const projectLibrary = JSON.parse(localStorage.getItem('projectLibrary'));
    for (let i = 0; i < projectLibrary.length; i += 1) {
      if (projectLibrary[i].projectId === projectId) {
        for (let j = 0; j < projectLibrary[i].toDos.length; j += 1) {
          if (projectLibrary[i].toDos[j].toDoId === toDoId) {
            Object.assign(projectLibrary[i].toDos[j], newToDo);
            renderToDos(
              projectLibrary[i].toDos,
              'edit',
              newToDo.toDoId,
            );
          }
        }
      }
    }
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
  }
};
export default getEditFormData;
