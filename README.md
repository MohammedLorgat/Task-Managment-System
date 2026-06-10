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

### API Documentation

https://intern-crud-task-api.onrender.com/api/docs/

### Production Server

```text
https://intern-crud-task-api.onrender.com
```

### Authentication Endpoints

| Method | Endpoint         | Description                    |
| ------ | ---------------- | ------------------------------ |
| POST   | /api/auth/signup | Register a new account         |
| POST   | /api/auth/login  | Login and receive access token |
| POST   | /api/auth/logout | Logout user                    |

### Task Endpoints

| Method | Endpoint               | Description         |
| ------ | ---------------------- | ------------------- |
| POST   | /api/tasks             | Create a task       |
| GET    | /api/tasks             | Get user tasks      |
| PATCH  | /api/tasks/{id}        | Update task details |
| PATCH  | /api/tasks/{id}/status | Update task status  |
| DELETE | /api/tasks/{id}        | Delete a task       |

### Profile Endpoints

| Method | Endpoint     | Description                |
| ------ | ------------ | -------------------------- |
| GET    | /api/profile | Retrieve user profile      |
| PATCH  | /api/profile | Update profile information |

### File Upload Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| POST   | /api/files/upload | Upload profile image  |
| DELETE | /api/files/delete | Delete uploaded image |

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
