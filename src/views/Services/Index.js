import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import MainContent from '../../components/MainContent';
import ServiceItem from './components/ServiceItem';
import { GET_ALL_SERVICES } from './Queries/ServicesQueries';
import Fetching from '../../components/Fetching';
import ServiceItemNotFound from './components/ServiceItemNotFound';
import ServiceFilter from './components/ServiceFilter';

/**
 * Services Index Component - View de serviços
 */
const links = [{ title: 'Serviços diferenciados', active: true }];

const Index = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);

  useEffect(() => {
    if (data) {
      const { allServices } = data;
      setServices(allServices);
      setFilteredServices(allServices);
    }
  }, [data]);

  const filterServices = value => {
    const result = services.filter(
      service => service.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    setFilteredServices(result);
  };

  return (
    <MainContent {...{ title: 'Serviços Diferenciados', links }}>
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            {loading && <Fetching />}
            {!loading && !error && (
              <>
                <ServiceFilter
                  {...{ filterServices, count: filteredServices.length }}
                />
                {filteredServices.map(service => (
                  <ServiceItem {...{ service }} key={service.id} />
                ))}
              </>
            )}
            {!loading && !error && filteredServices.length === 0 && (
              <ServiceItemNotFound />
            )}
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Index;
