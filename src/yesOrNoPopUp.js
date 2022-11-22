import { renderProjects, renderToDos } from "./renderToDos";

const yesOrNoPopUp = (
    project,
    parentNode,
    card,
    cardContainer,
    projectLibrary
) => {
    console.log(
        project,
        { parentNode },
        { card },
        { cardContainer },
        { projectLibrary }
    );
    console.log(!project.toDos);
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
        console.log(cardContainer, card);
        parentNode.removeChild(opacityContainer);
        if (!project.toDos) {
            for (let i = 0; i < projectLibrary.length; i++) {
                for (let j = 0; j < projectLibrary[i].toDos.length; j++) {
                    if (projectLibrary[i].toDos[j].toDoId == project.toDoId) {
                        console.log(projectLibrary[i].toDos[j]);
                        projectLibrary[i].toDos.splice(j, 1);
                        localStorage.setItem(
                            "projectLibrary",
                            JSON.stringify(projectLibrary)
                        );

                        renderToDos(projectLibrary[i].toDos);
                    }
                }
            }
        } else {
            for (let i = 0; i < projectLibrary.length; i++) {
                if (projectLibrary[i].projectId == project.projectId) {
                    projectLibrary.splice(i, 1);
                }
            }
            localStorage.setItem(
                "projectLibrary",
                JSON.stringify(projectLibrary)
            );
            renderProjects(projectLibrary);
            renderToDos(projectLibrary[0].toDos);
        }
    };
    popUpContainer.appendChild(yesButton);
    const noButton = document.createElement("button");
    noButton.classList.add("pop-up-no");
    noButton.innerHTML = "No";
    noButton.onclick = () => {
        parentNode.removeChild(opacityContainer);
        console.log("No");
    };
    popUpContainer.appendChild(noButton);
    opacityContainer.appendChild(popUpContainer);
    return opacityContainer;
};
export { yesOrNoPopUp };
