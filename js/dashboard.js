const API_BASE = "https://intern-crud-task-api.onrender.com/api";

const token = localStorage.getItem("accessToken");

if (!token) {
  window.location.href = "loginPage.html";
}

const taskForm = document.getElementById("taskForm");

const tasksContainer = document.getElementById("tasksContainer");

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;

  await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });

  taskForm.reset();

  loadTasks();
});

async function loadTasks() {
  const response = await fetch(`${API_BASE}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const tasks = await response.json();

  renderTasks(tasks);
}

function renderTasks(tasks) {

  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {

    tasksContainer.innerHTML += `
      <tr>

        <td>${index + 1}</td>

        <td>${task.title}</td>

        <td>

          <span class="
            badge
            ${task.status === "completed"
              ? "bg-success"
              : "bg-warning"}
          ">
            ${task.status}
          </span>

        </td>

        <td>

          <button
            class="btn btn-sm btn-success"
            onclick="toggleStatus(
              '${task.id}',
              '${task.status}'
            )"
          >
            ${
              task.status === "pending"
              ? "Complete"
              : "Pending"
            }
          </button>

        </td>

      </tr>
    `;
  });
}

async function editTask(id) {

  console.log("EDIT ID:", id);

  const title = prompt("Enter new task title");

  if (!title) return;

  const response = await fetch(`${API_BASE}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });

  const data = await response.json();

  console.log("EDIT RESPONSE:", data);

  loadTasks();
}

async function toggleStatus(id, currentStatus) {
  const status = currentStatus === "pending" ? "completed" : "pending";

  await fetch(`${API_BASE}/tasks/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      status,
    }),
  });

  loadTasks();
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("accessToken");

  window.location.href = "loginPage.html";
});

loadTasks();

