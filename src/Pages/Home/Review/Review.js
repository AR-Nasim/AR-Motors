import React from 'react';
import './Review.css';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
    const { img, name, review, rating } = props.review;

    return (
        <Col>
            <Card className="review-card h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><span>{name}</span></Card.Title>
                    <Card.Text>
                        <p><Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                        /> ({rating})</p>
                        <small className="review">{review}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;