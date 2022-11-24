import { renderToDos } from "../renders/renderToDos";

const addRemoveLineThrough = (projectLibrary, toDoId) => {
    for (let i = 0; i < projectLibrary.length; i++) {
        for (let j = 0; j < projectLibrary[i].toDos.length; j++) {
            if (projectLibrary[i].toDos[j].toDoId == toDoId) {
                projectLibrary[i].toDos[j].completed =
                    !projectLibrary[i].toDos[j].completed;
                localStorage.setItem(
                    "projectLibrary",
                    JSON.stringify(projectLibrary)
                );
                renderToDos(projectLibrary[i].toDos);
            }
        }
    }
};
export {addRemoveLineThrough}