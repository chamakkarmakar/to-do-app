import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    const handleAdd = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        console.log({ name, description });
        const task = { name, description };

        fetch('http://localhost:5000/tasks', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

        event.target.reset();
    }

    return (
        <div className='mx-auto w-50'>
            <Form onSubmit={handleAdd}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Task Name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Task Description" name="description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    ADD+
                </Button>
            </Form>

            <div>
                {
                    tasks.map(tk => <div key={tk._id} className="border border-dark mt-3">
                        <div className='d-flex justify-content-between'>
                            <div>
                            <h1>{tk.name}</h1>
                            <p>{tk.description}</p>
                            </div>
                            <div className='py-3 px-3'>
                            <button className='border rounded-3 me-3'>Complete</button>
                            <button className='border rounded-3 me-3'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>



        </div>
    );
};

export default Home;