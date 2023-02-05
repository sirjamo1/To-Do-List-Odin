import renderProjects from "../renders/renderProjects";
import { initializeApp } from "firebase/app";
import { config } from "../firebase.config";
import {
    getFirestore,
    doc,
    updateDoc,
} from "firebase/firestore";

const getEditFormData = async (
    title,
    description,
    dueDate,
    priority,
    projectId,
    toDoId
) => {
    if (title === "" || description === "" || dueDate === "") {
        alert("Please fill in all fields");
    } else {
        initializeApp(config);
        const db = getFirestore();
        const toDoRef = doc(
            db,
            "projects",
            `${projectId}`,
            "toDos",
            `${toDoId}`
        );
        await updateDoc(toDoRef, {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
        });
        renderProjects()
    }
};
export default getEditFormData;
