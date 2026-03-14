import Task from "../models/Task.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Task title is required" });
    }

    const task = await Task.create({
      ...req.body,
      project_id: req.params.project_id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get tasks (filter + sort + populate project details)

export const getTasks = async (req, res) => {
  try {
    const { status, priority, sort } = req.query;
    let query = { project_id: req.params.project_id };
    if (status) {
      query.status = status;
    }
    if (priority) {
      query.priority = priority;
    }
    let tasks = Task.find(query).populate("project_id", "name description");
    if (sort === "due_date") {
      tasks = tasks.sort({ due_date: 1 });
    }
    const result = await tasks;
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update task by ID
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("project_id", "name description");

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete task by ID
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
