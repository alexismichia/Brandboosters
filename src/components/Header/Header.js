import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }}>
          Brandboosters
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/services">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portafolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
      <style>
        {`
          .nav-link {
            transition: color 0.3s; /* Agregamos una transición para suavizar el cambio de color */
            font-family: 'cursiva'; /* Cambia 'cursiva' por el nombre de tu tipo de letra cursiva o moderna */
          }

          .nav-link:hover {
            color: #ffff00; /* Amarillo fosforescente */
            border-bottom: 4px solid #ffff00; /* Línea amarilla gruesa en la parte inferior */
          }
        `}
      </style>
    </header>
  );
}

export default Header;
