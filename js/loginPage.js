const API_BASE = "https://intern-crud-task-api.onrender.com/api";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginData = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

 if (response.ok) {

  localStorage.setItem("accessToken", data.accessToken);

  localStorage.setItem(
    "userEmail",
    loginData.email
  );

  alert("Login Successful");

  window.location.href = "dashboard.html";
}else {
      alert(data.message || "Invalid Credentials");
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
});
