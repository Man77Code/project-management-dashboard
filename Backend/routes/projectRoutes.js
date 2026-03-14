import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.post("/projects", createProject);
router.get("/projects", getProjects);
router.get("/projects/:id", getProjectById);
router.delete("/projects/:id", deleteProject);

export default router;
