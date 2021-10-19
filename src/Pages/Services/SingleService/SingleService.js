import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleService.css'
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router';

const SingleService = (props) => {
    const { id, name, thumb, shortline } = props.service;

    const history = useHistory();
    const handleDetailClick = () => {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            <Fade up>
                <Card className='card-container rounded'>
                    <div className="m-2 img-container">
                        <Card.Img variant="top rounded" src={thumb} height="200px" />
                    </div>
                    <Card.Body>
                        <Card.Title><h4>{name}</h4></Card.Title>
                        <Card.Text>
                            {shortline}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="border-0 bg-white">
                        <button onClick={handleDetailClick} className="light-bg px-5 py-2 border-0 rounded text-white fw-bold mb-2 ">Show Details</button>
                    </Card.Footer>
                </Card>
            </Fade>

        </Col>
    );
};

export default SingleService;