import renderProjects from "../renders/renderProjects";
import idGenerator from "./idGenerator";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { config } from "../firebase.config";

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectId = idGenerator();
    }
}

initializeApp(config);

const db = getFirestore();
const getProjectNameData = async (projectName) => {
    if (projectName === "") {
        alert("Please type a project title");
    } else {
        const newProject = new Project(projectName);
        try {
            await setDoc(doc(db, "projects", `${newProject.projectId}`), {
                projectName: newProject.projectName,
                projectId: newProject.projectId,
            });
        } catch (e) {
            console.error("error adding doc: ", e);
        }
        renderProjects("new", newProject.projectId);
    }
};

export default getProjectNameData;
