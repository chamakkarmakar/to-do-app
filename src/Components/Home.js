import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Tasks from './Tasks';

const Home = () => {
    const handleAdd = event =>{
        event.preventDefault();

        event.reset();
    }
    
    return (
        <div className='mx-auto w-50'>
            <Form onSubmit={handleAdd}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Task Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Task Description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    ADD+
                </Button>
            </Form>

            <Tasks></Tasks>

        </div>
    );
};

export default Home;