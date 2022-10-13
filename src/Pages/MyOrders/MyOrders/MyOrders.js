import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://morning-atoll-56415.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {setIsLoading(false);setMyOrders(data)});
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure you wanna delete this order?");
        if (confirmation) {
            const url = `https://morning-atoll-56415.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.deletedCount)
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingTours = myOrders.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingTours);
                    }
                })
        }
    }
    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading your tours</span></h4>
        </>
    }

    return (
        <Container>
            <h1 className="title">My Tours</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    myOrders.map(myOrder => <MyOrder myOrder={myOrder} handleDelete={handleDelete} key={myOrder._id}></MyOrder>)
                }
            </Row>
        </Container>
    );
};

export default MyOrders;