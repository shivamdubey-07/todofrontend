import axios from 'axios';

export const fetchTasks = () => async (dispatch) => {
    const res = await axios.get('https://todobackend-kohl.vercel.app/api/get/tasks');
    dispatch({ type: 'FETCH_TASKS', payload: res.data });
};

export const addTask = (task) => async (dispatch) => {
    const res = await axios.post('https://todobackend-kohl.vercel.app/api/create/tasks', task);
    dispatch({ type: 'ADD_TASK', payload: res.data });
};

export const updateTask = (id, task) => async (dispatch) => {
    const res = await axios.put(`https://todobackend-kohl.vercel.app/api/update/tasks/${id}`, task);
    dispatch({ type: 'UPDATE_TASK', payload: res.data });
};

export const deleteTask = (id) => async (dispatch) => {
    await axios.delete(`https://todobackend-kohl.vercel.app/api/delete/tasks/${id}`);
    dispatch({ type: 'DELETE_TASK', payload: id });
};

export const toggleTaskDone = (id) => async (dispatch) => {
    const res = await axios.put(`https://todobackend-kohl.vercel.app/api/tasks/${id}/toggle`);
    dispatch({ type: 'TOGGLE_TASK_DONE', payload: res.data });
};
