import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceItem = props => {
  const { service } = props;
  return (
    <div className="services">
      <div
        className="services__image"
        style={{ backgroundImage: `url('${service.thumbnail}')` }}
      />
      <div className="services__description">
        <h5>{service.title}</h5>
        <p>{service.subtitle}</p>
        <Link to={`/${service.id}`}>Saiba Mais</Link>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  service: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })
};

export default ServiceItem;
