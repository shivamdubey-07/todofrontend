import React, { useState, useEffect } from 'react';
import './TaskCard.css';

const TaskCard = ({ onAddTask, onUpdateTask, task, position }) => {
    const [taskText, setTaskText] = useState('');

    useEffect(() => {
        if (task) {
            setTaskText(task.text);
        } else {
            setTaskText('');
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            onUpdateTask({ ...task, text: taskText });
        } else {
            onAddTask(taskText);
        }
        setTaskText('');
    };

    const handleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="task-card" style={{ top: position.top, left: position.left }} onClick={handleClick}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter task"
                    required
                />
                <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
            </form>
        </div>
    );
};

export default TaskCard;
