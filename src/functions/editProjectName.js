import renderProjects from '../renders/renderProjects';
import { initializeApp } from "firebase/app";
import { config } from "../firebase.config";
import {
    getFirestore,
    doc,
    updateDoc,
} from "firebase/firestore";

const editProjectName =  (
  projectCard,
  projectCardTitleContainer,
  project,
  iconContainer,
) => {
      initializeApp(config);
      const db = getFirestore();
  const projectRef = doc(db, "projects", `${project.projectId}`)
  const editNameContainer = document.createElement('div');
  editNameContainer.classList.add('edit-name-container');
  const editNameInput = document.createElement('input');
  editNameInput.value = projectCardTitleContainer.firstChild.innerHTML;
  const saveChanges = document.createElement('button');
  saveChanges.innerHTML = 'save';
  saveChanges.onclick = async (event) => {
    event.stopPropagation();
    await updateDoc(projectRef, {
        projectName: editNameInput.value,
    });
        renderProjects();
  };
  editNameContainer.appendChild(editNameInput);
  editNameContainer.appendChild(saveChanges);
  projectCard.replaceChild(editNameContainer, projectCardTitleContainer);
  projectCard.removeChild(iconContainer);
};
export default editProjectName;
