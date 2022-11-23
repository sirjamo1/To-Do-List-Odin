import { renderToDos } from "./renderToDos";


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
const getEditFormData = (
    title,
    description,
    dueDate,
    priority,
    projectId,
    toDoId
) => {
    if (title == "" || description == "" || dueDate == "") {
        alert("Please fill in all fields");
    } else {
        let newToDo = new ToDo(
            title,
            description,
            dueDate,
            priority,
            projectId,
            toDoId
        );
        let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
        console.log(newToDo);
        for (let i = 0; i < projectLibrary.length; i++) {
            if (projectLibrary[i].projectId == projectId) {
                console.log(projectLibrary[i].toDos);
                for (let j = 0; j < projectLibrary[i].toDos.length; j++) {
                    console.log(projectLibrary[i].toDos[j]);
                    if (projectLibrary[i].toDos[j].toDoId == toDoId) {
                        Object.assign(projectLibrary[i].toDos[j], newToDo);
                        renderToDos(
                            projectLibrary[i].toDos,
                            "edit",
                            newToDo.toDoId
                        );
                    }
                }
            }
        }
        localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
    }
};
 export {getEditFormData}