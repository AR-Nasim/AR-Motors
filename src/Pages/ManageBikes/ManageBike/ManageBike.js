import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageBike = (props) => {
    const { bike, handleDelete } = props;
    const { name, img, price, description, _id } = props.bike;
    return (
        <Col>
            <Card className="text-start h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h5>{name}</h5></Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        <span className="text-dark fw-bold">Total paid: ${price}</span> <br />
                    </Card.Text>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-danger">Delete</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageBike;