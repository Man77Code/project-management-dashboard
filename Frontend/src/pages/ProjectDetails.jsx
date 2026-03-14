import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";
import CreateTaskForm from "../components/CreateTaskForm";
import { getTasks, createTask, updateTask, deleteTask } from "../services/taskService";

const ProjectDetails = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchTasks(); }, [id]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks(id);
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (task) => {
    try { await createTask(id, task); fetchTasks(); }
    catch (error) { console.error("Error creating task", error); }
  };

  const handleDelete = async (taskId) => {
    try { await deleteTask(taskId); fetchTasks(); }
    catch (error) { console.error("Error deleting task", error); }
  };

  const handleUpdate = async (taskId) => {
    try { await updateTask(taskId, { status: "done" }); fetchTasks(); }
    catch (error) { console.error("Error updating task", error); }
  };

  const doneTasks = tasks.filter((t) => t.status === "done").length;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Project Tasks</h1>
            <p className="text-sm text-slate-500 mt-1">Track and manage tasks for this project.</p>
          </div>
          {tasks.length > 0 && (
            <div className="flex items-center gap-3 text-sm bg-white border border-slate-200 rounded-xl px-4 py-2 shadow-sm">
              <span className="text-slate-500">Progress</span>
              <div className="w-24 bg-slate-100 rounded-full h-1.5">
                <div
                  className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${Math.round((doneTasks / tasks.length) * 100)}%` }}
                />
              </div>
              <span className="font-medium text-slate-700">{doneTasks}/{tasks.length}</span>
            </div>
          )}
        </div>
      </div>

      <CreateTaskForm onCreate={handleCreate} />

      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl h-36 animate-pulse" />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <svg className="w-10 h-10 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-sm font-medium">No tasks yet</p>
          <p className="text-xs mt-1">Add your first task above to start tracking work.</p>
        </div>
      ) : (
        <>
          <p className="text-xs text-slate-400 mb-4 font-medium uppercase tracking-wide">
            {tasks.length} task{tasks.length !== 1 ? "s" : ""} · {doneTasks} completed
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} onDelete={handleDelete} onUpdate={handleUpdate} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;