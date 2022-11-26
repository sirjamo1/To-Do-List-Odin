import renderToDos from '../renders/renderToDos';

const addRemoveLineThrough = (projectLibrary, toDoId) => {
  const copyOfLibrary = projectLibrary;
  for (let i = 0; i < copyOfLibrary.length; i += 1) {
    for (let j = 0; j < copyOfLibrary[i].toDos.length; j += 1) {
      if (copyOfLibrary[i].toDos[j].toDoId === toDoId) {
        copyOfLibrary[i].toDos[j].completed = !projectLibrary[i].toDos[j].completed;
        localStorage.setItem(
          'projectLibrary',
          JSON.stringify(copyOfLibrary),
        );
        renderToDos(copyOfLibrary[i].toDos);
      }
    }
  }
};
export default addRemoveLineThrough;
