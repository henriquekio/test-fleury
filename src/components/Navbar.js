/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/img/logo.svg';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="one column">
            <img src={logo} alt="Fleury"/>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="twelve columns">
            <ul className="navbar__menu">
              <li>
                <a href="#">Resultado de Exames</a>
              </li>
              <li>
                <a href="#">Exames Oferecidos</a>
              </li>
              <li>
                <a href="#">Cobertura de Convênios</a>
              </li>
              <li>
                <a href="#">Nossas Unidades</a>
              </li>
              <li>
                <a href="#">Fale Conosco</a>
              </li>
              <li>
                <a href="#">Mais Opções</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;