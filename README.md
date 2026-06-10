# Task Management System

A responsive Task Management System built using **HTML5, CSS3, JavaScript (ES6), and Bootstrap 5**. The application integrates with a production REST API to provide user authentication, profile management, and task tracking functionality.

Users can register, log in, manage their personal tasks, update their profiles, and upload profile images through an intuitive and modern interface.

## Features

### Authentication

* User Registration
* User Login
* Secure Logout
* JWT-based Authentication via REST API

### Task Management

* Create New Tasks
* View All Tasks
* Update Task Status
* Delete Tasks
* User-Specific Task Management

### Profile Management

* View Profile Information
* Update Name and Gender
* Upload Profile Avatar
* Manage Account Details

### Responsive Design

* Mobile-Friendly Layout
* Bootstrap 5 Components
* Modern Dashboard UI

---

## API Integration

This project consumes a REST API for authentication, profile management, file uploads, and task operations.


### Authentication Endpoints

| Method |          Description            |
| ------ | ------------------------------- |
| POST   | Register a new account          |
| POST   | Login and receive access token  |
| POST   | Logout user                      |

### Task Endpoints

| Method |    Description       |
| ------ | -------------------- |
| POST   |  Create a task       |
| GET    |  Get user tasks      |
| PATCH  |  Update task details |
| PATCH  |  Update task status  |
| DELETE |  Delete a task       |

### Profile Endpoints

| Method |        Description           |
| ------ |  --------------------------- |
| GET    |  Retrieve user profile       |
| PATCH  |  Update profile information  |

### File Upload Endpoints

| Method |      Description       |
| ------ | ---------------------- |
| POST   |  Upload profile image  |
| DELETE |  Delete uploaded image |

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap 5

### API & Services

* REST API
* JWT Authentication
* Cloudinary Image Storage
* MongoDB Database (via API)

---

## Learning Outcomes

This project helped me gain hands-on experience with:

* REST API Integration
* JWT Authentication
* Asynchronous JavaScript (Async/Await)
* Fetch API
* CRUD Operations
* File Upload Handling
* Responsive Web Design
* User Authentication Flows

---

## Author

**Mohammed Lorgat**

If you found this project helpful, please consider giving it a ⭐ on GitHub.
