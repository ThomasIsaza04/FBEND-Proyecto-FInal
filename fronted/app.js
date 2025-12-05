const API = "http://localhost:4000/api/tasks";

const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");


async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <div>
        <strong>${task.title}</strong><br>
        <small>${task.description ?? ""}</small>
      </div>

      <div>
        <button onclick="toggleTask(${task.id}, ${task.completed})">
          ${task.completed ? "Desmarcar" : "Completar"}
        </button>

        <button style="background: #c30000" onclick="deleteTask(${task.id})">
          Eliminar
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}


taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTask = {
    title: titleInput.value,
    description: descInput.value,
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });

  titleInput.value = "";
  descInput.value = "";

  loadTasks();
});


async function toggleTask(id, completed) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !completed }),
  });

  loadTasks();
}


async function deleteTask(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  loadTasks();
}

loadTasks();
