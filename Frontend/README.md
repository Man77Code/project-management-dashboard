# Project Management Dashboard (MERN)

A full-stack **Project Management Dashboard** built using the MERN Stack (MongoDB, Express.js, React, Node.js).
This application allows users to create projects, manage tasks, update task status, and organize project workflows.

---

## 🚀 Features

### Project Management

* Create new projects
* View all projects
* Delete projects

### Task Management

* Create tasks within a project
* Update task status (Pending → Done)
* Set task priority (Low, Medium, High)
* Delete tasks

### Dashboard UI

* Responsive UI using Tailwind CSS
* Project cards layout
* Task grid layout
* Clean and modern design

---

## 🛠 Tech Stack

### Frontend

* React
* React Router
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Project Structure

```
project-management-dashboard
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/project-management-dashboard.git
```

---

### 2️⃣ Install Backend Dependencies

```
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```
cd frontend
npm install
```

---

## 🔐 Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### Frontend `.env`

```
VITE_API_URL=http://localhost:5000/api
```

---

## ▶️ Run the Application

### Start Backend

```
cd backend
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

### Start Frontend

```
cd frontend
npm run dev
```

Application runs on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Projects

```
GET    /api/projects
POST   /api/projects
DELETE /api/projects/:id
```

### Tasks

```
GET    /api/projects/:projectId/tasks
POST   /api/projects/:projectId/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

## 📸 Screenshots

Add screenshots of:

* Projects Dashboard
* Project Tasks Page

---

## 🎯 Future Improvements

* Authentication (JWT)
* Drag & Drop task board
* Task deadlines & reminders
* Search & filtering
* User collaboration

---

## 👨‍💻 Author

Manish Bhagat
FUllStack Developer | 
