import React from 'react';
import { useParams } from 'react-router';
import useDatabase from '../../../hooks/useDatabase';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const services = useDatabase('./serviceData.json');
    // const newSelected = services?.find((service) => service.key === Number(serviceId));

    console.log(services);
    return (
        <div className="main-component">

        </div>
    );
};

export default ServiceDetail;