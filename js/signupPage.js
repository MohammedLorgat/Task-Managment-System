const API_BASE = "https://intern-crud-task-api.onrender.com/api";

document
  .getElementById("signupForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

const userData = {
  fullName: document.getElementById("fullName").value,
  email: document.getElementById("email").value,
  password: document.getElementById("password").value,
  gender: document.getElementById("gender").value
};

    try {
      const response = await fetch(`${API_BASE}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account Created Successfully");
        window.location.href = "loginPage.html";
      } else {
        alert(data.message || "Signup Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  });