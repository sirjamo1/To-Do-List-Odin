import { renderToDos } from "./renderToDos";
import { idGenerator } from "./idGenerator";


class ToDo {
    constructor(title, description, dueDate, priority, projectId, toDoId) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId;
        this.toDoId = toDoId ? toDoId : `${projectId}-${idGenerator()}`;
        this.completed = false;
    }
}
const getFormData = (title, description, dueDate, priority) => {
    if (title == "" || description == "" || dueDate == "") {
        alert("Please fill in all fields");
    } else {
        let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
        let activeProjectId = JSON.parse(
            localStorage.getItem("activeProjectId")
        );
        for (let i = 0; i < projectLibrary.length; i++) {
            if (activeProjectId == projectLibrary[i].projectId) {
                let newToDo = new ToDo(
                    title,
                    description,
                    dueDate,
                    priority,
                    projectLibrary[i].projectId
                );
                projectLibrary[i].toDos.push(newToDo);

                renderToDos(projectLibrary[i].toDos, "new", newToDo.toDoId);
            }
        }
        localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
    }
};
export {getFormData}