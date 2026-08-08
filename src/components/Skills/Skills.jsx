import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "JavaScript",
      description: "Lógica, DOM e desenvolvimento web",
    },
    {
      name: "React",
      description: "Componentes, props e interfaces",
    },
    {
      name: "HTML5",
      description: "Estrutura e semântica para aplicações web",
    },
    {
      name: "CSS3",
      description: "Layouts, responsividade e estilização",
    },
    {
      name: "Node.js",
      description: "Desenvolvimento de aplicações no back-end",
    },
    {
      name: "SQL",
      description: "Banco de dados e consultas",
    },
    {
      name: "Git & GitHub",
      description: "Versionamento e gerenciamento de projetos",
    },
    {
      name: "Linux",
      description: "Terminal, comandos e ambiente de desenvolvimento",
    },
  ];

  return (
    <section id="habilidades" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-tag">HABILIDADES</span>

          <h2>
            Tecnologias que estou
            <span> desenvolvendo</span>
          </h2>

          <p>
            Conhecimentos e tecnologias que fazem parte da minha formação
            como desenvolvedor e dos projetos que venho construindo.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;