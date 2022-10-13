import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ManageBike from '../ManageBike/ManageBike';


const ManageBikes = () => {
    const [bikes, setBikes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://morning-atoll-56415.herokuapp.com/bikes`)
            .then(res => res.json())
            .then(data => {setIsLoading(false);setBikes(data)});
    }, []);

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure you wanna delete this order?");
        if (confirmation) {
            const url = `https://morning-atoll-56415.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingBikes = bikes.filter(bike => bike._id !== id);
                        setBikes(remainingBikes);
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
                    bikes.map(bike => <ManageBike bike={bike} handleDelete={handleDelete} key={bike._id}></ManageBike>)
                }
            </Row>
        </Container>
    );
};

export default ManageBikes;