import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from '../Home/fondohome.png';  // Ajusta la ruta según tu estructura de carpetas

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si la ubicación actual es la ruta "/"
    if (location.pathname === '/') {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center';
    } else {
      // Restablece los estilos si la ubicación no es "/"
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundSize = 'auto';
      document.body.style.backgroundRepeat = 'auto';
      document.body.style.backgroundPosition = 'auto';
    }

    // Limpia los estilos cuando el componente se desmonta
    return () => {
      document.body.style.backgroundImage = 'none';
      document.body.style.backgroundSize = 'auto';
      document.body.style.backgroundRepeat = 'auto';
      document.body.style.backgroundPosition = 'auto';
    };
  }, [location.pathname]);

  return (
    <div>
      <h1>Bienvenido a Tu Empresa</h1>
      <p>Somos expertos en desarrollo y marketing.</p>
      {/* Agrega más contenido según sea necesario */}
    </div>
  );
}

export default Home;
