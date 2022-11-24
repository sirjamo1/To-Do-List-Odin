import trashBin from "./assets/icons/trash-bin.png";
import editIcon from "./assets/icons/edit-icon.png";
import completedIcon from "./assets/icons/completed-icon.png";
import { yesOrNoPopUp } from "./yesOrNoPopUp";
import editForm from "./editForm";

const renderToDos = (toDoArray, newEditDelete, newEditDeleteId) => {
    console.log(toDoArray)
    const appContainer = document.getElementById("app-container");
    const toDoContainer = document.getElementById("to-do-container");
    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.lastChild);
    }
    toDoArray.forEach((toDo) => {
        const toDoCard = document.createElement("div");
        toDoCard.classList =
            toDo.completed === false ? "to-do-card" : "to-do-card line-through";
        if (
            (newEditDelete == "new" && newEditDeleteId == toDo.toDoId) ||
            (newEditDelete == "edit" && newEditDeleteId == toDo.toDoId)
        ) {
            toDoCard.style.animation = "add-edit forwards 1.5s linear";
        }
        const title = document.createElement("h1");
        title.innerHTML =
            toDo.title.length < 10
                ? toDo.title
                : `${toDo.title.substring(0, 10)}...`;
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
            addRemoveLineThrough(projectLibrary, toDo.toDoId);
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
};
const addRemoveLineThrough = (projectLibrary, toDoId) => {
    for (let i = 0; i < projectLibrary.length; i++) {
        for (let j = 0; j < projectLibrary[i].toDos.length; j++) {
            if (projectLibrary[i].toDos[j].toDoId == toDoId) {
                projectLibrary[i].toDos[j].completed =
                    !projectLibrary[i].toDos[j].completed;
                localStorage.setItem(
                    "projectLibrary",
                    JSON.stringify(projectLibrary)
                );
                renderToDo(projectLibrary[i].toDos);
            }
        }
    }
};
export { renderToDos };
