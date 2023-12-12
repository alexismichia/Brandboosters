import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una carga de datos con un temporizador
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      name: 'DOGS',
      description: 'Diseñé y desarrollé una aplicación de Razas de perros que incluye autenticación, búsquedas, filtrados combinados, ordenamientos además de un paginado.',
      technologies: ['React', 'Redux', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/alexismichia/PI-Dogs.git',
    },
    {
      name: 'FOOTBALLCENTRALL',
      description: 'Página web sobre fútbol que incluye estadísticas, competiciones, una tienda, filtros, detalles de equipos, registro de usuarios, autenticación de terceros y más.',
      technologies: ['React', 'Redux', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/stars/alexismichia/lists/football-central',
    },
    {
      name: 'Alexis Portfolio',
      description: 'Alexis desarrolló su propio sitio web de portafolio para exhibir sus proyectos y habilidades. La plataforma incluye secciones como "Sobre mí", "Proyectos", "Habilidades" y "Contacto". Se utilizaron tecnologías de vanguardia en el desarrollo frontend para ofrecer una experiencia interactiva y atractiva para los visitantes.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/alexismichia/portafolio.git',
    },
    {
      name: 'Acredit',
      description: 'Acredit es una plataforma de préstamos que brinda simulación y gestión completa. Ofrece funciones avanzadas como pagos, comprobantes y cálculos, desarrolladas con tecnologías líderes como React, Redux, Express, Sequelize y PostgreSQL.',
      technologies: ['React', 'Redux', 'Express', 'Sequelize', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/stars/alexismichia/lists/acredit',
    },
    {
      name: 'Youtube Componente',
      description: 'componente reproducto de videos de Youtube ademas de tener otras pequeñas funcionalidades',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/alexismichia/reproductor_youtube.git',
    },
    {
      name: 'Twich Componente',
      description: 'Desarrollo de componente relacionado don twich y que muestra informacion de streamers, videos y lives en vivo, y mucho mas!',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubLink: 'https://github.com/alexismichia/twitch_ppol.git',
    },
    // Agrega más proyectos aquí
  ];

  // Agrupa los proyectos en grupos de tres
  const groupedProjects = projects.reduce((acc, project, index) => {
    if (index % 3 === 0) {
      acc.push([project]);
    } else {
      acc[acc.length - 1].push(project);
    }
    return acc;
  }, []);

  return (
    <section id="projects" style={{ background: 'black', color: 'white', paddingTop: '50px', paddingBottom: '50px' }}>
      <div className={`container ${loading ? 'loading' : ''}`}>
        <div className="projects-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-around' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project ${loading ? 'hidden' : 'fadeIn'}`}
              style={{
                width: 'calc(30% - 10px)', // Ajusta el ancho de la tarjeta
                marginBottom: '20px',
                padding: '20px',
                borderRadius: '10px',
                background: '#333',
                boxSizing: 'border-box',
                animationDelay: `${index * 0.3}s`, // Retraso basado en el índice para crear efecto de entrada escalonada
                display: 'flex',
                flexDirection: 'column', // Cambia la dirección del diseño a columna
                position: 'relative', // Agrega posición relativa para posicionar los enlaces de GitHub
              }}
            >
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>Tecnologías utilizadas:</p>
                <ul>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              {/* Enlaces de GitHub */}
              <div style={{ marginTop: 'auto' }}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}
                >
                  <img src="/githubicon.png" alt="GitHub" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                  {project.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
