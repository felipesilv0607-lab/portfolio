import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">
            Olá, eu sou
          </p>

          <h1>
            Felipe Luz Cunha
          </h1>

          <h2>
            Desenvolvedor Full Stack em Formação
          </h2>

          <p className="hero-description">
            Estudante de Análise e Desenvolvimento de Sistemas,
            focado em JavaScript, React, Node.js e SQL.
            Busco uma oportunidade de estágio para transformar
            conhecimento em experiência e contribuir com projetos reais.
          </p>

          <div className="hero-buttons">
            <a href="#projetos" className="hero-button primary">
              Ver meus projetos
            </a>

            <a
              href="https://github.com/felipesilv0607-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;