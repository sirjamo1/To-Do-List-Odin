import plusButton from "./assets/icons/plus-button.png";
import trashBin from "./assets/icons/trash-bin.png";
import editIcon from "./assets/icons/edit-icon.png";
import completedIcon from "./assets/icons/completed-icon.png";
import { yesOrNoPopUp } from "./yesOrNoPopUp";
import form from "./form";
import editForm from "./editForm";


let activeProjectId = "";
function renderToDos(toDoArray) {
    const appContainer = document.getElementById("app-container");
    const toDoContainer = document.getElementById("to-do-container");
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.lastChild);
    }

    toDoArray.forEach((toDo) => {
        const toDoCard = document.createElement("div");
        console.log(toDo.completed);
        toDoCard.classList =
            toDo.completed === false ? "to-do-card" : "to-do-card line-through";
        console.log(toDo.classList);
        const title = document.createElement("h1");
        title.innerHTML = toDo.title;
        toDoCard.appendChild(title);
        const toDoDescription = document.createElement("h4");
        toDoDescription.innerHTML = toDo.description;
        toDoCard.appendChild(toDoDescription);
        const toDoDueDate = document.createElement("p");
        toDoDueDate.innerHTML = toDo.dueDate;
        toDoCard.appendChild(toDoDueDate);
        const toDoPriority = document.createElement("p");
        toDoPriority.innerHTML = toDo.priority;
        toDoPriority.classList.add(`priority-${toDo.priority.toLowerCase()}`);
        toDoCard.appendChild(toDoPriority);
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("to-do-icon-container");
        const toDoEditButton = new Image();
        toDoEditButton.src = editIcon;
        toDoEditButton.onclick = () => {
            appContainer.appendChild(editForm(toDo, appContainer));
        };
        iconContainer.appendChild(toDoEditButton);
        const toDoCompletedButton = new Image();
        toDoCompletedButton.src = completedIcon;
        toDoCompletedButton.onclick = () => {
            let projectLibrary = JSON.parse(
                localStorage.getItem("projectLibrary")
            );

            addRemoveLineThrough(toDoCard, projectLibrary, toDo.toDoId);
        };
        iconContainer.appendChild(toDoCompletedButton);
        const toDoDeleteButton = new Image();
        toDoDeleteButton.src = trashBin;
        toDoDeleteButton.onclick = () => {
            let projectLibrary = JSON.parse(
                localStorage.getItem("projectLibrary")
            );
            appContainer.appendChild(
                yesOrNoPopUp(
                    toDo,
                    appContainer,
                    toDoCard,
                    toDoContainer,
                    projectLibrary
                )
            );
        };
        iconContainer.appendChild(toDoDeleteButton);
        toDoCard.appendChild(iconContainer);
        toDoContainer.appendChild(toDoCard);
    });
}
const addRemoveLineThrough = (toDoCard, projectLibrary, toDoId) => {
    projectLibrary = projectLibrary;
    for (let i = 0; i < projectLibrary.length; i++) {
        for (let j = 0; j < projectLibrary[i].toDos.length; j++) {
            console.log(projectLibrary[i].toDos[j].toDoId);
            if (projectLibrary[i].toDos[j].toDoId == toDoId) {
                console.log(!projectLibrary[i].toDos[j].completed);
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

    console.log({ toDoCard }, { projectLibrary }, { toDoId });
};

const renderProjects = (projects) => {
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
            projectCard.classList.add("selected-project");
            activeProjectId = project.projectId;
            let projectLibrary = JSON.parse(
                localStorage.getItem("projectLibrary")
            );
            renderProjects(projects);
            for (let i = 0; i < projectLibrary.length; i++) {
                if (projectLibrary[i].projectId == activeProjectId) {
                    renderToDos(projectLibrary[i].toDos);
                }
            }
            iconContainer.classList.add("icon-container-selected");
        };

        projectCard.classList =
            project.projectId == activeProjectId
                ? "selected-project project-card"
                : "project-card";

        const projectCardTitleContainer = document.createElement("div");
        projectCardTitleContainer.classList.add("project-card-title-container");
        const projectCardTitle = document.createElement("h3");
        projectCardTitleContainer.appendChild(projectCardTitle);
        projectCardTitle.innerHTML = project.projectName;
        projectCard.appendChild(projectCardTitleContainer);
        const iconContainer = document.createElement("div");
        iconContainer.classList =
            project.projectId == activeProjectId
                ? "icon-container icon-container-selected"
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
        for (let i = 0; i < projectLibrary.length; i++) {
            if (projectLibrary[i].projectId === project.projectId)
                projectLibrary[i].projectName = editNameInput.value;
            activeProjectId = projectLibrary[i];
            localStorage.setItem(
                "projectLibrary",
                JSON.stringify(projectLibrary)
            );
            renderProjects(projectLibrary);
        }
    };
    editNameContainer.appendChild(editNameInput);
    editNameContainer.appendChild(saveChanges);
    projectCard.replaceChild(editNameContainer, projectCardTitleContainer);
    projectCard.removeChild(iconContainer);
};

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
                        renderToDos(projectLibrary[i].toDos);
                    }
                }
            }
        }
        localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
    }
};

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
const removeClass = (el, classToRemove) => {
    for (let i = 0; i < el.childNodes.length; i++) {
        el.childNodes[i].classList.remove(classToRemove);
    }
};
const getFormData = (title, description, dueDate, priority) => {
    if (title == "" || description == "" || dueDate == "") {
        alert("Please fill in all fields");
    } else {
        let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
        for (let i = 0; i < projectLibrary.length; i++) {
            console.log(activeProjectId);
            if (activeProjectId == projectLibrary[i].projectId) {
                let newToDo = new ToDo(
                    title,
                    description,
                    dueDate,
                    priority,
                    projectLibrary[i].projectId
                );
                projectLibrary[i].toDos.push(newToDo);

                renderToDos(projectLibrary[i].toDos);
            }
        }
        localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
    }
};
class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.projectId = idGenerator();
        this.toDos = [];
    }
}
const getProjectNameData = (projectName) => {
    if (projectName === "") {
        alert("Please type a project title");
    } else {
        let newProject = new Project(projectName);
        let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
        projectLibrary.unshift(newProject);
        localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
        activeProjectId = newProject.projectId;
        renderProjects(projectLibrary);
        renderToDos(newProject.toDos);
    }
};

const idGenerator = () => {
    return Math.floor(Math.random() * 1000000);
};
export {
    getFormData,
    getProjectNameData,
    getEditFormData,
    renderProjects,
    renderToDos,
};
