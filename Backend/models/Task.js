import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    title: {
     type: String,
      required: [true, "Task title is required"],
      trim: true,

    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",

    },
    
    due_date: {
      type: Date,
    },

  },
  {
    timestamps: true,
  },
);


const Task = mongoose.model("Task", taskSchema);

export default Task;

