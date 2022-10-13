import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://morning-atoll-56415.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col md={8}><h1 className="title">Add your review</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="hook-form">
                        <input defaultValue={user.displayName} {...register("name", { required: true })} />
                        {errors.name && <span className="error">This field is required</span>}
                        <input type="number" placeholder="Rating" defaultValue="" {...register("rating")} />
                        <textarea placeholder="Review" defaultValue="" {...register("review")} />
                        <input placeholder="Add Image URL" defaultValue="" {...register("img")} />
                        <input type="submit" value="Add Review" className="btn-custom" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddReview;