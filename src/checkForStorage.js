import { renderProjects, renderToDos } from "./renderToDos";
const checkForStorage = () => {
    if (typeof Storage !== "undefined") {
        console.log("Code for localStorage/sessionStorage.");
        // need to make local storage render on open
        let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
        if (projectLibrary.length < 1) {
            projectLibrary = [
                {
                    projectName: "Project 1",
                    projectId: 123456,
                    toDos: [
                        {
                            title: "To Do 1",
                            description: "description of what to do",
                            dueDate: "2022-12-17",
                            priority: "Low",
                            projectId: 123456,
                            toDoId: "123456-654321",
                            completed: true,
                        },
                    ],
                },
                {
                    projectName: "Project 2",
                    projectId: 123457,
                    toDos: [
                        {
                            title: "To Do 1",
                            description: "description of what to do",
                            dueDate: "2022-12-17",
                            priority: "Low",
                            projectId: 123457,
                            toDoId: "123457-654322",
                            completed: false,
                        },
                    ],
                },
            ];
            localStorage.setItem(
                "projectLibrary",
                JSON.stringify(projectLibrary)
            );
            // console.log(projectLibrary[0])
            // renderProjects(projectLibrary);

            console.log(projectLibrary[0]);
            renderProjects(projectLibrary);
            renderToDos(projectLibrary[0].toDos)
        } else {
          renderProjects(projectLibrary);
          renderToDos(projectLibrary[0].toDos)
        }
    } else {
        console.log("Sorry! No Web Storage support..");
    }
};
export { checkForStorage };
