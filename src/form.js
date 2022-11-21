import { getFormData } from "./renderToDos";
// NEED TO : make global opacity form style, append all form to it
export default function form(appContainer) {
    const opacityContainer = document.createElement("div");
    opacityContainer.classList.add("opacity-container");
    const formContainer = document.createElement("form");
    formContainer.id = "form-container";
    const formTitleLabel = document.createElement("label");
    formTitleLabel.for = "form-title";
    formTitleLabel.innerHTML = "Title";
    formContainer.appendChild(formTitleLabel);
    const formTitleInput = document.createElement("input");
    formTitleInput.type = "text";
    formTitleInput.id = "form-title";
    formContainer.appendChild(formTitleInput);
    const formDescriptionLabel = document.createElement("label");
    formDescriptionLabel.for = "form-description";
    formDescriptionLabel.innerHTML = "Description";
    formContainer.appendChild(formDescriptionLabel);
    const formDescriptionInput = document.createElement("input");
    formDescriptionInput.type = "text";
    formDescriptionInput.id = "form-description";
    formContainer.appendChild(formDescriptionInput);
    const formDueDateLabel = document.createElement("label");
    formDueDateLabel.for = "due-date";
    formDueDateLabel.innerHTML = "Due date";
    formContainer.appendChild(formDueDateLabel);
    const formDueDateInput = document.createElement("input");
    formDueDateInput.type = "date";
    formDueDateInput.id = "due-date";
    formContainer.appendChild(formDueDateInput);
    const fromPriorityLabel = document.createElement("label")
    fromPriorityLabel.innerHTML = "Priority level"
    formContainer.appendChild(fromPriorityLabel)
    const formPrioritySelect = document.createElement("select");
    formPrioritySelect.id = "priority";
    formPrioritySelect.name = "priority";
    const formPriorityHigh = document.createElement("option");
    formPriorityHigh.value = "High";
    formPriorityHigh.innerHTML = "High";
    formPrioritySelect.appendChild(formPriorityHigh);
    const formPriorityMedium = document.createElement("option");
    formPriorityMedium.value = "Medium";
    formPriorityMedium.innerHTML = "Medium";
    formPrioritySelect.appendChild(formPriorityMedium);
    const formPriorityLow = document.createElement("option");
    formPriorityLow.value = "Low";
    formPriorityLow.innerHTML = "Low";
    formPrioritySelect.appendChild(formPriorityLow);
    formContainer.appendChild(formPrioritySelect);
    const formButton = document.createElement("button");
    formButton.id = "form-submit-button";
    formButton.type = "submit";
    formButton.innerHTML = "Submit";
    formButton.onclick = () => {
        getFormData(
            formTitleInput.value,
            formDescriptionInput.value,
            formDueDateInput.value,
            formPrioritySelect.value
        );
        formContainer.reset();
        appContainer.removeChild(opacityContainer)
        return false;
    };
      const cancelButton = document.createElement("button");
      cancelButton.id = "cancel-button";
      cancelButton.innerHTML = "X";
      cancelButton.onclick = () => {
          appContainer.removeChild(opacityContainer);
          return false;
      };
      formContainer.appendChild(cancelButton)
    formContainer.appendChild(formButton);
    opacityContainer.appendChild(formContainer)

    return opacityContainer;
}
