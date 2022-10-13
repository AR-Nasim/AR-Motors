import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
            fetch('https://morning-atoll-56415.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {setIsLoading(false);setOrders(data);});
    }, []);


    const handleUpdate = (currentOrder) => {
        const url = `https://morning-atoll-56415.herokuapp.com/orders/${currentOrder._id}`;
        currentOrder.status = "Shipped";
        console.log(currentOrder);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const currentOrders = orders.filter(order => order._id !== currentOrder._id);
                    setOrders([...currentOrders, currentOrder]);
                }
            })
    }

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure you wanna delete this order?");
        if (confirmation) {
            const url = `https://morning-atoll-56415.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading all the orders</span></h4>
        </>
    }

    return (
        <Container>
            <h1 className="title">Manage All Orders</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    orders.map(order => <ManageOrder order={order} handleDelete={handleDelete} handleUpdate={handleUpdate} key={order._id}></ManageOrder>)
                }
            </Row>
        </Container>
    );
};

export default ManageAllOrders;