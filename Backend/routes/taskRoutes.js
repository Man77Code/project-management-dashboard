import express from "express";

import{
    createTask,
    getTasks,
    updateTask,
    deleteTask
} from "../controllers/taskController.js";


const router = express.Router();

// Nested routes under projects

router.post("/projects/:project_id/tasks",createTask);
router.get("/projects/:project_id/tasks",getTasks);

// Task routes by Id

router.put("/tasks/:id",updateTask);
router.delete("/tasks/:id",deleteTask);

export default router;