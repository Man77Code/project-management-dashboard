import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import CreateProjectModal from "../components/CreateProjectModal";
import { getProjects, createProject, deleteProject } from "../services/projectService";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchProjects(); }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(Array.isArray(data) ? data : data.projects || []);
    } catch (error) {
      console.error("Error fetching projects", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (project) => {
    try { await createProject(project); fetchProjects(); }
    catch (error) { console.error("Error creating project", error); }
  };

  const handleDelete = async (id) => {
    try { await deleteProject(id); fetchProjects(); }
    catch (error) { console.error("Error deleting project", error); }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Projects</h1>
        <p className="text-sm text-slate-500 mt-1">Manage and track all your projects in one place.</p>
      </div>

      <CreateProjectModal onCreate={handleCreate} />

      {loading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl h-40 animate-pulse" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <svg className="w-10 h-10 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
          </svg>
          <p className="text-sm font-medium">No projects yet</p>
          <p className="text-xs mt-1">Create your first project above to get started.</p>
        </div>
      ) : (
        <>
          <p className="text-xs text-slate-400 mb-4 font-medium uppercase tracking-wide">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} onDelete={handleDelete} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;