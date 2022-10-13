import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../../Shared/Service/Service';
import './Services.css';

const Services = () => {
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

    const newServices = services.slice(0,6);

    if (isLoading) {
        console.log("spinner");
        return <>
            <Spinner animation="border" variant="info" className="mt-5" />
            <h4><span>Loading your Bikes</span></h4>
        </>
    }

    return (
        <Container>
            <h1 className="title mt-5">Select the best <br />bike for you</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    newServices.map(service => <Service service={service} key={service._id}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;