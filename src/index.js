import _ from 'lodash';
import './style.css';
import sidebar from './renders/sidebar';
import checkForStorage from './functions/checkForStorage';
import renderProjects from './renders/renderProjects';

function component() {
  const appContainer = document.createElement('div');
  appContainer.id = 'app-container';
  appContainer.appendChild(sidebar(appContainer));
  const toDoContainer = document.createElement('div');
  toDoContainer.id = 'to-do-container';
  appContainer.appendChild(toDoContainer);

  return appContainer;
}

document.body.appendChild(component());
checkForStorage();
window.addEventListener(
  'resize',
  () => {
    const projectLibrary = JSON.parse(localStorage.getItem('projectLibrary'));
    renderProjects(projectLibrary);
  },
  true,
);
