import React, { useState } from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = useState ([]);

    const addTask = () => {
        const newTask = {
            id: Date.now(),
            title: 'New Task',
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
            ));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => toggleTask(task.id)}>
                            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;