/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";

/**
 * Adiciona Breadcrumbs ao componente container
 */
const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <p className="breadcrumbs__title">Você está em: </p>
      <ul className="breadcrumbs__list">
        <li><Link to="/">Home</Link></li>
        <li><a className="active" href="#">Serviços Diferenciados</a></li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;