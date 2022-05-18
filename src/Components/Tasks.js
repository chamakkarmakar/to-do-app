import React, { useEffect, useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            {
                    tasks.map(task =>
                        <div key={task._id} className="border border-dark mt-3">
                            <h1>{task.name}</h1>
                            <p>{ task.description}</p>
                        </div>)
                }
        </div>
    );
};

export default Tasks;