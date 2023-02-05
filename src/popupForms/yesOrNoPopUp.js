import renderProjects from "../renders/renderProjects";
import renderToDos from "../renders/renderToDos";
import { doc, deleteDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { config } from "../firebase.config";
import {
    getFirestore,
} from "firebase/firestore";

const yesOrNoPopUp = (project, parentNode, card, cardContainer, item) => {
    initializeApp(config);
    const db = getFirestore();

    const projectRef =
        item === "toDo"
            ? doc(
                  db,
                  "projects",
                  `${project.projectId}`,
                  "toDos",
                  `${project.toDoId}`
              )
            : doc(db, "projects", `${project.projectId}`);
    const opacityContainer = document.createElement("div");
    opacityContainer.classList.add("opacity-container");
    const popUpContainer = document.createElement("div");
    popUpContainer.classList.add("yes-or-no-popup");
    const popUpText = document.createElement("h4");
    popUpText.innerHTML = `Are you sure you want to delete ${
        project.projectName ? project.projectName : project.title
    }?`;
    popUpContainer.appendChild(popUpText);
    const yesButton = document.createElement("button");
    yesButton.classList.add("pop-up-yes");
    yesButton.innerHTML = "Yes";
    yesButton.onclick = () => {
        parentNode.removeChild(opacityContainer);
        deleteDoc(projectRef).then(() => {
            renderProjects();
        });
    };
    popUpContainer.appendChild(yesButton);
    const noButton = document.createElement("button");
    noButton.classList.add("pop-up-no");
    noButton.innerHTML = "No";
    noButton.onclick = () => {
        parentNode.removeChild(opacityContainer);
    };
    popUpContainer.appendChild(noButton);
    opacityContainer.appendChild(popUpContainer);
    return opacityContainer;
};
export default yesOrNoPopUp;
