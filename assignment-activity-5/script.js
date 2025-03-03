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

  insertCheckBox(taskItem, taskInput, inputContainer);
  inputContainer.appendChild(taskInput);

  taskItem.appendChild(inputContainer);
  tasksContainer.appendChild(taskItem);
  insertEditButton(taskItem, taskInput, utilContainer);
  insertRemoveButton(taskItem, utilContainer);
  taskItem.appendChild(utilContainer);

  newTask.value = ""; // Clear input after adding task
});

function insertCheckBox(taskItem, taskInput, inputContainer) {
  const checkBox = document.createElement("button");
  checkBox.classList.add("checkbox");

  checkBox.addEventListener("click", function () {
    taskItem.classList.toggle("checked");
    if (taskItem.classList.contains("checked")) {
      checkBox.innerHTML = '<i class="fa-solid fa-check"></i>';
    } else {
      checkBox.textContent = "";
    }
  });
  inputContainer.appendChild(checkBox);
}

function insertEditButton(taskItem, taskInput, utilContainer) {
  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.textContent = "Edit";

  let previousValue = taskInput.value; // Store initial value

  function editBlurHandler() {
    setTimeout(() => {
      taskInput.value = previousValue; // Revert to last saved value
      editButton.textContent = "Edit";
      taskItem.classList.remove("edit-clicked");
      taskInput.disabled = true;
    }, 900);
  }

  editButton.addEventListener("click", function () {
    if (editButton.textContent === "Save") {
      previousValue = taskInput.value; // Update saved value

      // Save state
      taskInput.removeEventListener("blur", editBlurHandler);
      editButton.textContent = "Edit";
      taskItem.classList.add("save-clicked");
      taskItem.classList.remove("edit-clicked");
      taskInput.disabled = true;
    } else {
      // Edit state
      editButton.textContent = "Save";
      taskInput.disabled = false;
      taskInput.focus();
      taskItem.classList.remove("save-clicked");
      taskItem.classList.add("edit-clicked");
      taskInput.addEventListener("blur", editBlurHandler, { once: true }); // Ensure it's added only once
    }
  });

  utilContainer.appendChild(editButton);
}

function insertRemoveButton(taskItem, utilContainer) {
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    tasksContainer.removeChild(taskItem);
  });
  utilContainer.appendChild(removeButton);
}
