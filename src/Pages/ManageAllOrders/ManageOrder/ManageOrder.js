import React,{ useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageOrder = (props) => {
    const { order, handleDelete, handleUpdate } = props;
    const [orderDetails, setOrderDetails] = useState({});
    useEffect(()=>{
        fetch(`https://morning-atoll-56415.herokuapp.com/bikes/${order.orderId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));
    }, [order.orderId]);
    const { img, name, price } = orderDetails;

    return (
        <Col>
            <Card className="text-start h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><span>{name}</span></Card.Title>
                    <Card.Text>
                        <span className="text-dark fw-bold">User Name: {order.name}</span> <br />
                        <span className="text-dark fw-bold">Email: {order.email}</span> <br />
                        <span className="text-dark fw-bold">Address: {order.address}</span> <br />
                        <span className="text-dark fw-bold">Phone: {order.phone}</span> <br />
                        <span className="text-dark fw-bold">Total paid: ${price}</span> <br />
                        <span className={ order.status === "Pending" ? "fw-bold text-danger" : "fw-bold text-success"}>Status: {order.status}</span> <br />
                    </Card.Text>
                    <div>
                        {
                            order.status === "Pending" && <button onClick={()=> handleUpdate(order)} className="btn btn-success me-3">Active</button>
                        }
                        <button onClick={()=> handleDelete(order._id)} className="btn btn-danger">Delete</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ManageOrder;