import { renderProjects } from '../renders/renderProjects';
import { renderToDos } from '../renders/renderToDos';
import { idGenerator } from './idGenerator';

class Project {
  constructor(projectName) {
    this.projectName = projectName;
    this.projectId = idGenerator();
    this.toDos = [];
  }
}

const getProjectNameData = (projectName) => {
  if (projectName === '') {
    alert('Please type a project title');
  } else {
    const newProject = new Project(projectName);
    const projectLibrary = JSON.parse(localStorage.getItem('projectLibrary'));
    // let activeProjectId = JSON.parse(
    //   localStorage.getItem('activeProjectId'),
    // );
    projectLibrary.unshift(newProject);
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
    // activeProjectId = newProject.projectId;
    renderProjects(projectLibrary, 'new', newProject.projectId);
    renderToDos(newProject.toDos);
  }
};

export default getProjectNameData;
