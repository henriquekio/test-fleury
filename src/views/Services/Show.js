import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_SERVICE_DETAIL } from './Queries/ServicesQueries';
import MainContent from '../../components/MainContent';
import DetailContent from './components/DetailContent';
import Fetching from '../../components/Fetching';

const Show = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SERVICE_DETAIL, {
    variables: { id: Number(id) }
  });

  return (
    <MainContent>
      <div className="container">
        <div className="row">
          <div className="twelvee columns">
            <h4 className="service-detail__title">Serviços Diferenciados</h4>
          </div>
        </div>
      </div>
      {loading && <Fetching />}
      {!loading && !error && <DetailContent {...{ data }} />}
    </MainContent>
  );
};

export default Show;
