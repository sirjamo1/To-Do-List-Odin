import { renderProjects, renderToDos } from "./renderToDos";
const checkForStorage = () => {
    if (typeof Storage !== "undefined") {
        console.log("Code for localStorage/sessionStorage.");
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
                        {
                            title: "To Do 1",
                            description: "description of what to do",
                            dueDate: "2022-11-13",
                            priority: "Medium",
                            projectId: 123456,
                            toDoId: "123456-654322",
                            completed: false,
                        },
                        {
                            title: "To Do 1",
                            description: "description of what to do",
                            dueDate: "2022-10-07",
                            priority: "High",
                            projectId: 123456,
                            toDoId: "123456-654323",
                            completed: false,
                        },
                    ],
                },
                {
                    projectName: "Project 2",
                    projectId: 123457,
                    toDos: [
                        {
                            title: "To Do 2",
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
