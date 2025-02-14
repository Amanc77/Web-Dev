document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Render all stored tasks on page load
  tasks.forEach(renderTask);

  addTaskBtn.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <span>${task.text}</span>
      <button class="delete-btn">Delete</button>`;

    todoList.appendChild(li);

    // Toggle completion status
    li.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) return; // Ignore delete clicks
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    // Handle delete button
    li.querySelector(".delete-btn").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering task completion toggle
      const taskId = parseInt(li.getAttribute("data-id"));

      // Remove task from the array
      tasks = tasks.filter((t) => t.id !== taskId);
      saveTasks();

      // Remove task from UI
      li.remove();
    });
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
