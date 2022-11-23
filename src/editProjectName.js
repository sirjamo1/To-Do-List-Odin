import { renderProjects } from "./renderProjects";

const editProjectName = (
    projectCard,
    projectCardTitleContainer,
    project,
    iconContainer,
    projectLibrary
) => {
    const editNameContainer = document.createElement("div");
    editNameContainer.classList.add("edit-name-container");
    const editNameInput = document.createElement("input");
    editNameInput.value = projectCardTitleContainer.firstChild.innerHTML;
    editNameInput.onclick = (event) => {
        event.stopPropagation();
    };
    const saveChanges = document.createElement("button");
    saveChanges.innerHTML = "save";
    saveChanges.onclick = (event) => {
        event.stopPropagation();
         let activeProjectId = JSON.parse(
             localStorage.getItem("activeProjectId")
         );
        for (let i = 0; i < projectLibrary.length; i++) {
            if (projectLibrary[i].projectId === project.projectId) {
                projectLibrary[i].projectName = editNameInput.value;
                activeProjectId = projectLibrary[i].projectId;
                localStorage.setItem(
                    "projectLibrary",
                    JSON.stringify(projectLibrary)
                );
                renderProjects(
                    projectLibrary,
                    "edit",
                    projectLibrary[i].projectId
                );
            }
        }
    };
    editNameContainer.appendChild(editNameInput);
    editNameContainer.appendChild(saveChanges);
    projectCard.replaceChild(editNameContainer, projectCardTitleContainer);
    projectCard.removeChild(iconContainer);
};
export {editProjectName}