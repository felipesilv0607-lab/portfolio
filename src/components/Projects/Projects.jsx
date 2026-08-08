import "./Projects.css";
import weatherAppImage from "../../assets/weather-app.png";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "Aplicação web de previsão do tempo com busca de cidades, clima atual, previsão, localização do usuário e interface dinâmica conforme as condições climáticas. O projeto utiliza API de clima e backend com Node.js.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "Express",
        "OpenWeather API",
      ],
      github: "https://github.com/felipesilv0607-lab/weather-app",
      demo: "https://felipesilv0607-lab.github.io/weather-app/",
    },
  ];

  return (
    <section id="projetos" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">PROJETOS</span>

          <h2>
            Projetos que estou
            <span> construindo</span>
          </h2>

          <p>
            Projetos práticos que fazem parte da minha evolução como
            desenvolvedor.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
             <img
              src={weatherAppImage}
                alt="Preview do Weather App"
              className="project-image"
              />

              <div className="project-content"></div>
              
              
              
              
              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                 <a
                    href={project.demo}
                    target="_blank"
                     rel="noopener noreferrer"
                   className="project-link primary"
                   >
                   Ver projeto →
                  </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver no GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;