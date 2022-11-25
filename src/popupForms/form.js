import { getFormData } from "../functions/getFormData";

export default function form(appContainer) {
    const opacityContainer = document.createElement("div");
    opacityContainer.classList.add("opacity-container");
    const formContainer = document.createElement("form");
    formContainer.id = "form-container";
    const titleLabel = document.createElement("label");
    titleLabel.for = "form-title";
    titleLabel.innerHTML = "Title";
    formContainer.appendChild(titleLabel);
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "form-title";
    formContainer.appendChild(titleInput);
    const descriptionLabel = document.createElement("label");
    descriptionLabel.for = "form-description";
    descriptionLabel.innerHTML = "Description";
    formContainer.appendChild(descriptionLabel);
    const descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "form-description";
    formContainer.appendChild(descriptionInput);
    const dueDateLabel = document.createElement("label");
    dueDateLabel.for = "due-date";
    dueDateLabel.innerHTML = "Due date";
    formContainer.appendChild(dueDateLabel);
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "due-date";
    formContainer.appendChild(dueDateInput);
    const priorityLabel = document.createElement("label");
    priorityLabel.innerHTML = "Priority level";
    formContainer.appendChild(priorityLabel);
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.name = "priority";
    const priorityHigh = document.createElement("option");
    priorityHigh.value = "High";
    priorityHigh.innerHTML = "High";
    prioritySelect.appendChild(priorityHigh);
    const priorityMedium = document.createElement("option");
    priorityMedium.value = "Medium";
    priorityMedium.innerHTML = "Medium";
    prioritySelect.appendChild(priorityMedium);
    const priorityLow = document.createElement("option");
    priorityLow.value = "Low";
    priorityLow.innerHTML = "Low";
    prioritySelect.appendChild(priorityLow);
    formContainer.appendChild(prioritySelect);
    const formButton = document.createElement("button");
    formButton.id = "form-submit-button";
    formButton.type = "submit";
    formButton.innerHTML = "Submit";
    formButton.onclick = () => {
        getFormData(
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            prioritySelect.value
        );
        formContainer.reset();
        appContainer.removeChild(opacityContainer);
        return false;
    };
    formContainer.addEventListener("keypress", (e) => {
        if (e.keyCode == 13) {
            getFormData(
                titleInput.value,
                descriptionInput.value,
                dueDateInput.value,
                prioritySelect.value
            );
            formContainer.reset();
            appContainer.removeChild(opacityContainer);
            return false;
        }
    });
    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.innerHTML = "X";
    cancelButton.onclick = () => {
        appContainer.removeChild(opacityContainer);
        return false;
    };
    formContainer.appendChild(cancelButton);
    formContainer.appendChild(formButton);
    opacityContainer.appendChild(formContainer);

    return opacityContainer;
}
