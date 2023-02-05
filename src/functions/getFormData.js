import renderToDos from "../renders/renderToDos";
import idGenerator from "./idGenerator";
import { initializeApp } from "firebase/app";
import { config } from "../firebase.config";
import {
    getFirestore,
    doc,
    setDoc,
} from "firebase/firestore";

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

const getFormData = async (project, title, description, dueDate, priority) => {
    console.log(project);
    if (title === "" || description === "" || dueDate === "") {
        alert("Please fill in all fields");
    } else {
        const newToDo = new ToDo(
            title,
            description,
            dueDate,
            priority,
            project.projectId
        );
        console.log(project, "after class create");
        initializeApp(config);
        const db = getFirestore();
        const toDoRef = doc(
            db,
            "projects",
            `${project.projectId}`,
            "toDos",
            `${newToDo.toDoId}`
        );
        await setDoc(toDoRef, {
            title: newToDo.title,
            description: newToDo.description,
            dueDate: newToDo.dueDate,
            priority: newToDo.priority,
            projectId: newToDo.projectId,
            toDoId: newToDo.toDoId,
            completed: newToDo.completed,
        });
         renderToDos(project.projectId)
    }
};
export default getFormData;
