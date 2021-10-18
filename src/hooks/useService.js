import { useEffect, useState } from "react";

const useService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./serviceData.js')
            .then(res => res.json())
            .then(service => setService(service));
    }, [])
    return { service };
}

export default useService;


