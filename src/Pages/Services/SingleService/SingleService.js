import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleService.css'

const SingleService = (props) => {
    const { name, thumb, shortline } = props.service;
    return (
        <Col>
            <Card className='card-container'>
                <div className="m-2 img-container">
                    <Card.Img variant="top" src={thumb} height="200px" />
                </div>
                <Card.Body>
                    <Card.Title><h4>{name}</h4></Card.Title>
                    <Card.Text>
                        {shortline}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-white">
                    <button className="light-bg px-5 py-2 border-0 rounded text-white fw-bold mb-2 ">Show Details</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleService;