import axios from "axios";

export const getAll = () => {
  return axios.get("http://localhost:3000/todo/");
};

export const add = (body) => {
  return axios.post("http://localhost:3000/todo/add", { body });
};

export const edit = (id, todoItem) => {
  return axios.patch(`http://localhost:3000/todo/${id}`, todoItem);
};

export const deleteItem = (id) => {
  return axios.delete(`http://localhost:3000/todo/${id}`);
};
