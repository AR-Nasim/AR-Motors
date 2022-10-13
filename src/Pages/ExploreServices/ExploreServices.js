import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Shared/Service/Service';

const ExploreServices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://morning-atoll-56415.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading your Bikes</span></h4>
        </>
    }
    return (
        <>
        <Container className="p-4 top-course mt-4">
            <h1 className="fw-bold pb-2">All <span>Products</span></h1>
            <Row xs={1} md={3} className="g-4 p-4">

                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }

            </Row>
        </Container>
    </>
    );
};

export default ExploreServices;