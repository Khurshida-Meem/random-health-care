import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDatabase from '../../../hooks/useDatabase';
import SingleService from '../../Services/SingleService/SingleService';


const Services = () => {
    const services = useDatabase('./serviceData.json');
    return (
        <div className="my-5">
            <Container>
                <h2 className="primary-text component-headings pb-3">Our Services</h2>
                <h2 className="primary-text pb-2">Featured Services</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }
                </Row>
            </Container>
        </div>
    )
};

export default Services;