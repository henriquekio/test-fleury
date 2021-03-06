import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_SERVICE_DETAIL } from './Queries/ServicesQueries';
import MainContent from '../../components/MainContent';
import DetailContent from './components/DetailContent';
import Fetching from '../../components/Fetching';
import Modal from '../../components/Modal';
import ContentModal from './components/ContentModal';

/**
 * Services show component - View de detalhes de um serviço
 */
const Show = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [title, setTitle] = useState('');
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SERVICE_DETAIL, {
    variables: { id: Number(id) }
  });

  useEffect(() => {
    if (data) {
      setTitle(data.service.title);
    }
  }, [data]);

  const links = [
    { title: 'Serviços diferenciados', active: false, link: '/' },
    { title, active: true }
  ];

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <MainContent {...{ links }}>
      <div className="container">
        <div className="row">
          <div className="twelvee columns">
            <h4 className="service-detail__title">Serviços Diferenciados</h4>
          </div>
        </div>
      </div>
      {loading && <Fetching />}
      {!loading && !error && (
        <DetailContent {...{ data, openmodal: openModal }} />
      )}
      <Modal {...{ opened: modalOpened, closeModal }} title="Agendar Exames">
        <ContentModal />
      </Modal>
    </MainContent>
  );
};

export default Show;
