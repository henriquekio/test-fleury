/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

/**
 * Adiciona Breadcrumbs ao componente container
 */
const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <p className="breadcrumbs__title">Você está em: </p>
      <ul className="breadcrumbs__list">
        <li><a href="#">Home</a></li>
        <li><a className="active" href="#">Serviços Diferenciados</a></li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;