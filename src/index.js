import _ from "lodash";
import "./style.css";
import sidebar from "./sidebar";
import { renderProjects } from "./renderToDos";
import { checkForStorage } from "./checkForStorage";

function component() {
    const appContainer = document.createElement("div");
    appContainer.id = "app-container";
    appContainer.appendChild(sidebar(appContainer));
    const toDoContainer = document.createElement("div");
    toDoContainer.id = "to-do-container";
    appContainer.appendChild(toDoContainer);
    console.log(appContainer.childNodes[0])
    let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
    console.log(projectLibrary)
    // renderProjects(projectLibrary)
    // if (typeof Storage !== "undefined") {
    //     console.log("Code for localStorage/sessionStorage.");
    //     // need to make local storage render on open
    //     let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
    //     if (projectLibrary.length < 1) {
    //         projectLibrary = [
    //             {
    //                 projectName: "Project 1",
    //                 projectId: 123456,
    //                 toDos: [
    //                     {
    //                         title: "To Do 1",
    //                         description: "description of what to do",
    //                         dueDate: "2022-12-17",
    //                         priority: "Low",
    //                         projectId: 123456,
    //                         toDoId: "123456-654321",
    //                         completed: true,
    //                     },
    //                 ],
    //             },
    //             {
    //                 projectName: "Project 2",
    //                 projectId: 123457,
    //                 toDos: [
    //                     {
    //                         title: "To Do 1",
    //                         description: "description of what to do",
    //                         dueDate: "2022-12-17",
    //                         priority: "Low",
    //                         projectId: 123457,
    //                         toDoId: "123457-654322",
    //                         completed: false,
    //                     },
    //                 ],
    //             },
    //         ];
    //         localStorage.setItem(
    //             "projectLibrary",
    //             JSON.stringify(projectLibrary)
    //         );
    //         // console.log(projectLibrary[0])
    //         // renderProjects(projectLibrary);
        
    //         console.log(projectLibrary[0]);
    //         renderProjects(projectLibrary[0]);
    //     }
    // } else {
    //     console.log("Sorry! No Web Storage support..");
    // }

    return appContainer;
}

document.body.appendChild(component());
checkForStorage()
// if (typeof Storage !== "undefined") {
//     console.log("Code for localStorage/sessionStorage.");
//     // need to make local storage render on open
//     let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));
//     if (projectLibrary.length < 1) {
//         projectLibrary = [
//             {
//                 projectName: "Project 1",
//                 projectId: 123456,
//                 toDos: [
//                     {
//                         title: "To Do 1",
//                         description: "description of what to do",
//                         dueDate: "2022-12-17",
//                         priority: "Low",
//                         projectId: 123456,
//                         toDoId: "123456-654321",
//                         completed: true,
//                     },
//                 ],
//             },
//             {
//                 projectName: "Project 2",
//                 projectId: 123457,
//                 toDos: [
//                     {
//                         title: "To Do 1",
//                         description: "description of what to do",
//                         dueDate: "2022-12-17",
//                         priority: "Low",
//                         projectId: 123457,
//                         toDoId: "123457-654322",
//                         completed: false,
//                     },
//                 ],
//             },
//         ];
//         localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
//         // console.log(projectLibrary[0])
//         // renderProjects(projectLibrary);

//         console.log(projectLibrary[0]);
//         renderProjects(projectLibrary);
//     } else {
//         renderProjects(projectLibrary)
//     }
// } else {
//     console.log("Sorry! No Web Storage support..");
// }
// let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary"));

// renderProjects(projectLibrary);
// const projectLibrary = [
//     {
//         projectName: "Project Demo",
//         projectId: 123456,
//         toDos: [
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//                 completed: true,
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//             {
//                 title: "To Do 1",
//                 description: "description of what to do",
//                 dueDate: "2022-12-17",
//                 priority: "Low",
//                 projectId: 123456,
//                 toDoId: "123456-654321",
//             },
//         ],
//     },
// ];
