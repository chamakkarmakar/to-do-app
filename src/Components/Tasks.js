import React from 'react';

const Tasks = ({tk}) => {


    return (

        <div className="border border-dark mt-3">
            <h1>{tk.name}</h1>
            <p>{tk.description}</p>
        </div>

    );
};

export default Tasks;