import axios from 'axios';

const baseURL = `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`;

const TaskRequest = async (endpoint) => {
  const { data } = await axios.get((baseURL + endpoint));
  return data;
};

const AddTaskRequest = async (endpoint, body) => {
  console.log(body);
  await axios.post((baseURL + endpoint), body);
};

const upDateTaskRequest = async (endpoint, body) => {
  console.log(body);
  await axios.put((baseURL + endpoint), body);
};

const deleteTaskRequest = async (endpoint, params) => {
  console.log('Deletando vendo', params);
  await axios.delete(`${baseURL}${endpoint}${params}`);
};

export {
  TaskRequest,
  AddTaskRequest,
  upDateTaskRequest,
  deleteTaskRequest,
}