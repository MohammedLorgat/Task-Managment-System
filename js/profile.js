const API_BASE = "https://intern-crud-task-api.onrender.com/api";

const token = localStorage.getItem("accessToken");

if (!token) {
  window.location.href = "loginPage.html";
}

// Load Profile
async function loadProfile() {
  try {
    const response = await fetch(`${API_BASE}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to load profile");
    }

    const profile = await response.json();

    console.log("PROFILE:", profile);

    document.getElementById("fullName").value = profile.fullName || "";

    document.getElementById("email").value =
      localStorage.getItem("userEmail") || "";

    document.getElementById("gender").value = profile.gender || "";

    document.getElementById("profileHeading").textContent =
      profile.fullName || "User Profile";

    if (profile.profileUrl) {
      document.getElementById("profileImage").src = profile.profileUrl;
    }
  } catch (error) {
    console.error(error);
    alert("Unable to load profile");
  }
}

// Update Profile
document.getElementById("profileForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    formData.append("fullName", document.getElementById("fullName").value);

    formData.append("gender", document.getElementById("gender").value);

    const imageFile = document.getElementById("profileImageFile").files[0];

    if (imageFile) {
      formData.append("profileImage", imageFile);
    }

    const response = await fetch(`${API_BASE}/profile`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    console.log("UPDATE RESPONSE:", data);

    if (!response.ok) {
      throw new Error(data.message || "Profile update failed");
    }

    alert("Profile Updated Successfully");

    loadProfile();
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("accessToken");

  window.location.href = "loginPage.html";
});

// Initial Load
loadProfile();
