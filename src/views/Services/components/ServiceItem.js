import React from 'react';
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  const { service } = props;
  return (
    <div className="services">
      <div className="services__image">
        <img src={service.thumbnail} className="responsive-img" alt=""/>
      </div>
      <div className="services__description">
        <h5>{service.title}</h5>
        <p>{service.subtitle}</p>
        <Link to="/">Saiba Mais</Link>
      </div>
    </div>
  );
};

export default ServiceItem;