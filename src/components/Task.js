import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toggleTaskDone } from '../actions/taskActions';
import './Task.css';

const Task = ({ task, onDelete, onUpdate }) => {
    const dispatch = useDispatch();

    const handleToggleDone = () => {
        dispatch(toggleTaskDone(task._id));
    };

    const handleEdit = () => {
        onUpdate(task);
    };

    return (
        <div className={`task ${task.isDone ? 'done' : ''}`}>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={handleToggleDone}
                className="checkbox"
            />
            <span>{task.text}</span>
            <div className="icons">
            <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={handleEdit} />
            <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => onDelete(task._id)} />
            </div>
        </div>
    );
};

export default Task;
