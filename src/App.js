import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask, deleteTask, updateTask } from './actions/taskActions';
import TaskCard from './components/TaskCard';
import Task from './components/Task';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);

    const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
    const [showCard, setShowCard] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleAddTask = (text) => {
        dispatch(addTask({ text }));
        setShowCard(false);
    };

    const handleUpdateTask = (task) => {
        dispatch(updateTask(task._id, task));
        setShowCard(false);
    };

    const handleCardOpen = (e) => {
        if (
            !e.target.closest('.task') &&
            !e.target.closest('.task-list') &&
            !e.target.closest('.edit-icon') &&
            !e.target.closest('.delete-icon') &&
            !e.target.closest('.checkbox')
        ) {
            setCardPosition({ top: e.clientY, left: e.clientX });
            setShowCard(true);
            setCurrentTask(null);
        }
    };

    return (
        <div className="app" onClick={handleCardOpen}>
        <h1> ToDo - App</h1>
        <span>Click anywhere on black screen to add a new task</span>
            {showCard && (
                <TaskCard 
                    onAddTask={handleAddTask} 
                    onUpdateTask={handleUpdateTask} 
                    task={currentTask} 
                    position={cardPosition} 
                />
            )}
            <div className="task-list">
                {tasks.map((task) => (
                    <Task 
                        key={task._id} 
                        task={task} 
                        onDelete={() => dispatch(deleteTask(task._id))} 
                        onUpdate={(updatedTask) => {
                            setCardPosition({ top: cardPosition.top, left: cardPosition.left });
                            setShowCard(true);
                            setCurrentTask(updatedTask);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
