/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Adiciona Breadcrumbs ao componente container
 */
const Breadcrumbs = props => {
  const { links = [] } = props;

  return (
    <div className="breadcrumbs">
      <p className="breadcrumbs__title">Você está em: </p>
      <ul className="breadcrumbs__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {links.map(link => (
          <li key={link.title}>
            <Link to={link.link ? link.link : '#'} className={link.active ? 'active' : ''} href="#">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
