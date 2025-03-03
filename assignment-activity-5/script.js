const tasksContainer = document.querySelector("#tasks");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTask = document.querySelector("#new-task");
  const taskItem = document.createElement("li");
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  const taskInput = document.createElement("input");
  const utilContainer = document.createElement("div");

  utilContainer.classList.add("util");
  taskInput.value = newTask.value;
  taskInput.disabled = true;

  insertCheckBox(inputContainer);
  inputContainer.appendChild(taskInput);

  taskItem.appendChild(inputContainer);
  tasksContainer.appendChild(taskItem);
  insertEditButton(utilContainer);
  insertRemoveButton(utilContainer);
  taskItem.appendChild(utilContainer);

  newTask.value = ""; // Clear input after adding task
});

tasksContainer.addEventListener("click", function (e) {
  const taskItem = e.target.closest("li");

  if (
    e.target.classList.contains("checkbox") ||
    e.target.classList.contains("fa-check")
  ) {
    taskItem.classList.toggle("checked");
    const checkBox = e.target.closest(".checkbox");
    if (taskItem.classList.contains("checked")) {
      checkBox.innerHTML = '<i class="fa-solid fa-check"></i>';
    } else {
      checkBox.innerHTML = "";
    }
  } else if (e.target.classList.contains("edit")) {
    const taskInput = e.target.parentElement.previousElementSibling.lastChild;
    console.log(taskInput);
    const promptValue = prompt("Edit Task:", taskInput.value);
    if (!promptValue || promptValue.trim() == "") {
      return;
    } else {
      taskInput.value = promptValue;
    }
    return;
  } else if (e.target.classList.contains("remove")) {
    tasksContainer.removeChild(taskItem);
  }
});

function insertCheckBox(inputContainer) {
  const checkBox = document.createElement("button");
  checkBox.classList.add("checkbox");
  inputContainer.appendChild(checkBox);
}

function insertEditButton(utilContainer) {
  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.textContent = "Edit";
  utilContainer.appendChild(editButton);
}

function insertRemoveButton(utilContainer) {
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.textContent = "Remove";
  utilContainer.appendChild(removeButton);
}
