import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)' }}>
        Brandboosters
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
          <Nav.Link as={Link} to="/portfolio">Portafolio</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <style>
        {`
          .nav-link {
            transition: color 0.3s;
            font-family: 'cursiva';
          }

          .nav-link:hover {
            color: #ffff00;
            border-bottom: 4px solid #ffff00;
          }
        `}
      </style>
    </Navbar>
  );
}

export default Header;
