import { renderProjects } from "../renders/renderProjects";
import { renderToDos } from "../renders/renderToDos";
const checkForStorage = () => {
    if (typeof Storage !== "undefined") {
        console.log("Code for localStorage/sessionStorage.");
        localStorage.setItem("activeProjectId", JSON.stringify(""));
        let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
        if (projectLibrary == null || projectLibrary.length < 1) {
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
                            title: "To Do 2",
                            description: "description of what to do",
                            dueDate: "2022-11-13",
                            priority: "Medium",
                            projectId: 123456,
                            toDoId: "123456-654322",
                            completed: false,
                        },
                        {
                            title: "To Do 3",
                            description: "description of what to do",
                            dueDate: "2022-10-07",
                            priority: "High",
                            projectId: 123456,
                            toDoId: "123456-654323",
                            completed: false,
                        },
                        {
                            title: "To Do 4",
                            description: "description of what to do",
                            dueDate: "2022-11-17",
                            priority: "High",
                            projectId: 123456,
                            toDoId: "123456-654324",
                            completed: false,
                        },
                        {
                            title: "To Do 5",
                            description: "description of what to do",
                            dueDate: "2022-12-07",
                            priority: "High",
                            projectId: 123456,
                            toDoId: "123456-654325",
                            completed: false,
                        },
                        {
                            title: "To Do 6",
                            description: "description of what to do",
                            dueDate: "2022-08-27",
                            priority: "High",
                            projectId: 123456,
                            toDoId: "123456-654326",
                            completed: false,
                        },
                        {
                            title: "To Do 7",
                            description: "description of what to do",
                            dueDate: "2022-12-01",
                            priority: "High",
                            projectId: 123456,
                            toDoId: "123456-654327",
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
            renderToDos(projectLibrary[0].toDos);
        } else {
            renderProjects(projectLibrary);
            renderToDos(projectLibrary[0].toDos);
        }
    } else {
        console.log("Sorry! No Web Storage support..");
    }
};
export { checkForStorage };
