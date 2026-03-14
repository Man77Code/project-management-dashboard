import API from "../api/axios";

export const getTasks = async (projectId) => {
  const res = await API.get(`/projects/${projectId}/tasks`);
  return res.data;
};

export const createTask = async (projectId, data) => {
  const res = await API.post(`/projects/${projectId}/tasks`, data);
  return res.data;
};

export const updateTask = async (id, data) => {
  const res = await API.put(`/tasks/${id}`, data);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await API.delete(`/tasks/${id}`);
  return res.data;
};