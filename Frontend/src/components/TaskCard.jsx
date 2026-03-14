const priorityStyles = {
  low:    { badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-400" },
  medium: { badge: "bg-amber-100 text-amber-700",     dot: "bg-amber-400"   },
  high:   { badge: "bg-rose-100 text-rose-700",       dot: "bg-rose-400"    },
};

const statusStyles = {
  done:        "bg-emerald-100 text-emerald-700",
  pending:     "bg-slate-100 text-slate-600",
  "in-progress": "bg-blue-100 text-blue-700",
};

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const priority   = priorityStyles[task.priority] || priorityStyles.medium;
  const statusClass = statusStyles[task.status]    || statusStyles.pending;
  const isDone     = task.status === "done";

  return (
    <div className={`bg-white border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col gap-3 ${isDone ? "border-emerald-200 opacity-75" : "border-slate-200"}`}>

      <div className="flex items-start justify-between gap-2">
        <h3 className={`text-sm font-semibold leading-snug ${isDone ? "line-through text-slate-400" : "text-slate-800"}`}>
          {task.title}
        </h3>
        <span className={`shrink-0 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${priority.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${priority.dot}`} />
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {task.description}
        </p>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusClass}`}>
          {task.status || "pending"}
        </span>
        {task.due_date && (
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {task.due_date?.slice(0, 10)}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <button
          onClick={() => onUpdate(task._id)}
          disabled={isDone}
          className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${isDone ? "text-slate-300 cursor-not-allowed" : "text-emerald-600 hover:text-emerald-800"}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {isDone ? "Completed" : "Mark Done"}
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-rose-500 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;