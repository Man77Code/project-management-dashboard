import { Link } from "react-router-dom";

const colors = [
  "bg-indigo-500", "bg-violet-500", "bg-sky-500",
  "bg-rose-500", "bg-amber-500", "bg-teal-500",
];

const ProjectCard = ({ project, onDelete }) => {
  const accentColor = colors[project.name.charCodeAt(0) % colors.length];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
      <div className={`h-1.5 w-full ${accentColor}`} />

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h2 className="text-base font-semibold text-slate-800 leading-tight line-clamp-1">
            {project.name}
          </h2>
          <span className="shrink-0 text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-medium">
            Active
          </span>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-1">
          {project.description || "No description provided."}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <Link
            to={`/project/${project._id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Open
          </Link>

          <button
            onClick={() => onDelete(project._id)}
            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-rose-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;