import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import MainContent from '../../components/MainContent';
import ServiceItem from './components/ServiceItem';
import { GET_ALL_SERVICES } from './Queries/ServicesQueries';
import Fetching from "../../components/Fetching";

const Index = () => {
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);
  return (
    <MainContent title="Serviços Diferenciados">
      <div className="container">
        <div className="row">
          <div className="twelve columns">
            {loading && <Fetching/>}
            {!loading &&
            !error &&
            data.allServices.map(service => <ServiceItem {...{ service }} key={service.id} />)}
          </div>
        </div>
      </div>
    </MainContent>
  );
};

export default Index;
