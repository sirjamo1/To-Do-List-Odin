import { getEditFormData } from "./renderToDos";

export default function editForm(todo, appContainer) {
     const opacityContainer = document.createElement("div");
     opacityContainer.classList.add("opacity-container");
    const formContainer = document.createElement("form");
    formContainer.id = "form-container";
    formContainer.style.display = "grid";
    const formTitleLabel = document.createElement("label");
    formTitleLabel.for = "form-title";
    formTitleLabel.innerHTML = "Title";
    formContainer.appendChild(formTitleLabel);
    const formTitleInput = document.createElement("input");
    formTitleInput.type = "text";
    formTitleInput.id = "form-title";
    formTitleInput.value = todo.title;
    formContainer.appendChild(formTitleInput);
    const formDescriptionLabel = document.createElement("label");
    formDescriptionLabel.for = "form-description";
    formDescriptionLabel.innerHTML = "Description";
    formContainer.appendChild(formDescriptionLabel);
    const formDescriptionInput = document.createElement("input");
    formDescriptionInput.type = "text";
    formDescriptionInput.id = "form-description";
    formDescriptionInput.value = todo.description;
    formContainer.appendChild(formDescriptionInput);
    const formDueDateLabel = document.createElement("label");
    formDueDateLabel.for = "due-date";
    formDueDateLabel.innerHTML = "Due date";
    formContainer.appendChild(formDueDateLabel);
    const formDueDateInput = document.createElement("input");
    formDueDateInput.type = "date";
    formDueDateInput.id = "due-date";
    formDueDateInput.value = todo.dueDate;
    formContainer.appendChild(formDueDateInput);
    const formPrioritySelect = document.createElement("select");
    formPrioritySelect.id = "priority";
    formPrioritySelect.name = "priority";
    const formPriorityHigh = document.createElement("option");
    formPriorityHigh.value = "High";
    formPriorityHigh.innerHTML = "High";
    todo.priority == "High"
        ? (formPriorityHigh.selected = "selected")
        : formPriorityHigh;
    formPrioritySelect.appendChild(formPriorityHigh);
    const formPriorityMedium = document.createElement("option");
    formPriorityMedium.value = "Medium";
    formPriorityMedium.innerHTML = "Medium";
    todo.priority == "Medium"
        ? (formPriorityMedium.selected = "selected")
        : formPriorityMedium;
    formPrioritySelect.appendChild(formPriorityMedium);
    const formPriorityLow = document.createElement("option");
    formPriorityLow.value = "Low";
    formPriorityLow.innerHTML = "Low";
    todo.priority == "Low"
        ? (formPriorityLow.selected = "selected")
        : formPriorityLow;
    formPrioritySelect.appendChild(formPriorityLow);
    formContainer.appendChild(formPrioritySelect);
    const formButton = document.createElement("button");
    formButton.id = "form-submit-button";
    formButton.type = "submit";
    formButton.innerHTML = "Save";
    formButton.onclick = () => {
        getEditFormData(
            formTitleInput.value,
            formDescriptionInput.value,
            formDueDateInput.value,
            formPrioritySelect.value,      
            todo.projectId,
            todo.toDoId
        );
        formContainer.reset();
        appContainer.removeChild(opacityContainer)
        return false;
    };
    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.innerHTML = "X"
    cancelButton.onclick = () => {
        appContainer.removeChild(opacityContainer);
        return false
    }
    formContainer.appendChild(cancelButton)
    formContainer.appendChild(formButton);
    opacityContainer.appendChild(formContainer)

    return opacityContainer;
}
