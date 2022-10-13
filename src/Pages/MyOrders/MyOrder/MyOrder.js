import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const MyOrder = (props) => {
    const { myOrder, handleDelete } = props;
    const [orderDetails, setOrderDetails] = useState({});
    useEffect(()=>{
        fetch(`https://morning-atoll-56415.herokuapp.com/bikes/${myOrder.orderId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));
    }, []);
    const { img, name, price } = orderDetails;
    return (
        <Col>
            <Card className="text-start h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><span>{name}</span></Card.Title>
                    <Card.Text>
                        <span className="text-dark fw-bold">User Name: {myOrder.name}</span> <br />
                        <span className="text-dark fw-bold">Email: {myOrder.email}</span> <br />
                        <span className="text-dark fw-bold">Address: {myOrder.address}</span> <br />
                        <span className="text-dark fw-bold">Phone: {myOrder.phone}</span> <br />
                        <span className="text-dark fw-bold">Total paid: ${price}</span> <br />
                    </Card.Text>
                    <button onClick={()=> handleDelete(myOrder._id)} className="btn btn-danger">Delete</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyOrder;