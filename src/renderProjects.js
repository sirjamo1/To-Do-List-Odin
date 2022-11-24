import { renderToDos } from "./renderToDos";
import plusButton from "./assets/icons/plus-button.png";
import trashBin from "./assets/icons/trash-bin.png";
import editIcon from "./assets/icons/edit-icon.png";
import { yesOrNoPopUp } from "./yesOrNoPopUp";
import { removeClass } from "./removeClass";
import { editProjectName } from "./editProjectName";
import form from "./form";

const renderProjects = (projects, newEditDelete, newEditDeleteId) => {
    let activeProjectId = JSON.parse(localStorage.getItem("activeProjectId"));
    let activeIdCount = 0;
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].projectId == activeProjectId) {
            activeIdCount += 1;
        }
    }
    if (activeIdCount < 1) {
        activeProjectId = projects[0].projectId;
    }
    const appContainer = document.getElementById("app-container");
    const projectCardContainer = document.getElementById(
        "project-card-container"
    );
    if (projects.length > 8) {
        projectCardContainer.style.overflowX = "hidden";
    } else {
        projectCardContainer.style.overflowX = "visible";
    }
    while (projectCardContainer.firstChild) {
        projectCardContainer.removeChild(projectCardContainer.lastChild);
    }
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCardContainer.appendChild(projectCard);
        projectCard.onclick = () => {
            removeClass(projectCardContainer, "selected-project");
            Array.from(
                document.querySelectorAll(".icon-container-selected")
            ).forEach((el) => el.classList.remove("icon-container-selected"));
            Array.from(
                document.querySelectorAll(".icon-container-selected-scroll")
            ).forEach((el) =>
                el.classList.remove("icon-container-selected-scroll")
            );
            if (projects.length > 8) {
                projectCardContainer.style.overflowX = "hidden";
            } else {
                projectCardContainer.style.overflowX = "visible";
            }
            projectCard.classList.add("selected-project");
            activeProjectId = project.projectId;
            localStorage.setItem(
                "activeProjectId",
                JSON.stringify(activeProjectId)
            );
            console.log(activeProjectId);
            let projectLibrary = JSON.parse(
                localStorage.getItem("projectLibrary")
            );
            if (projects.length > 8) {
                iconContainer.classList.add("icon-container-selected-scroll");
            } else {
                iconContainer.classList.add("icon-container-selected");
            }
            renderToDos(project.toDos);
        };

        projectCard.classList =
            project.projectId == activeProjectId
                ? "selected-project project-card"
                : "project-card";

        if (
            (newEditDelete == "new" && newEditDeleteId == project.projectId) ||
            (newEditDelete == "edit" && newEditDeleteId == project.projectId)
        ) {
            projectCard.style.animation = "add-edit forwards 1.5s linear";
        }

        const projectCardTitleContainer = document.createElement("div");
        projectCardTitleContainer.classList.add("project-card-title-container");
        const projectCardTitle = document.createElement("h3");
        projectCardTitleContainer.appendChild(projectCardTitle);
        let desiredNameLength = document.body.offsetWidth / 60;
        projectCardTitle.innerHTML =
            project.projectName.length < desiredNameLength
                ? project.projectName
                : `${project.projectName.substring(0, desiredNameLength)}...`;
        projectCard.appendChild(projectCardTitleContainer);
        const iconContainer = document.createElement("div");
        iconContainer.classList =
            project.projectId == activeProjectId
                ? `icon-container ${
                      projects.length > 8
                          ? "icon-container-selected-scroll"
                          : "icon-container-selected"
                  }`
                : "icon-container";
        projectCard.appendChild(iconContainer);
        const editAndTrashContainer = document.createElement("div");
        editAndTrashContainer.classList.add("edit-and-trash-container");
        iconContainer.appendChild(editAndTrashContainer);
        const projectEditName = new Image();
        projectEditName.src = editIcon;
        projectEditName.onclick = (event) => {
            event.stopPropagation();
            let projectLibrary = JSON.parse(
                localStorage.getItem("projectLibrary")
            );
            editProjectName(
                projectCard,
                projectCardTitleContainer,
                project,
                iconContainer,
                projectLibrary
            );
        };
        editAndTrashContainer.appendChild(projectEditName);
        const projectTrashBin = new Image();
        projectTrashBin.src = trashBin;
        projectTrashBin.onclick = () => {
            let projectLibrary = JSON.parse(
                localStorage.getItem("projectLibrary")
            );
            appContainer.appendChild(
                yesOrNoPopUp(
                    project,
                    appContainer,
                    projectCard,
                    projectCardContainer,
                    projectLibrary
                )
            );
        };
        editAndTrashContainer.appendChild(projectTrashBin);
        const addCardButton = new Image();
        addCardButton.src = plusButton;
        addCardButton.classList.add("project-card-add-icon");
        addCardButton.onclick = () => {
            appContainer.appendChild(form(appContainer));
        };
        iconContainer.appendChild(addCardButton);
    });
};

export { renderProjects };
