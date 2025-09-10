const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
