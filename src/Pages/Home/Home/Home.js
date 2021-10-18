import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDatabase from '../../../hooks/useDatabase';
import SingleService from '../../Services/SingleService/SingleService';
import Banner from '../Banner/Banner';

const Home = () => {
    const services = useDatabase('./serviceData.json');
    services.splice(6, services.length);
    return (
        <div>
            <Banner></Banner>
            <div className="my-5">
                <Container>
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

        </div>
    );
};

export default Home;