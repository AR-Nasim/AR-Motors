import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/model.png';

const About = () => {
    return (
        <Container>
            <Row className="text-start d-flex align-items-center mt-4">
                    <Col md={4} className="text-center info-img">
                        <img style={{ width: "40%" }} src={img} alt="" />
                    </Col>
                    <Col md={8}>
                        <div>
                            <h1 className="title text-start">About Us</h1>
                            <p>We provide international bikes and services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure and Business travel with bikes.</p>
                            <p>Before the automobile, before the airplane, Fuji began as a bicycle company – founded in 1899 and named for one of the world’s the most iconic peaks. In the 122 years since, the Fuji brand and its distinctive mountain logo have been synonymous with cycling and cyclists everywhere, which is why you still hear riders say, “My first bike was a Fuji.”</p>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
};

export default About;