import "./Contact.css";

function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">CONTATO</span>

          
            <h2>

            Vamos <span>trabalhar juntos?</span>
           </h2>
          

          <p>
            Estou buscando uma oportunidade de estágio em tecnologia e estou
            aberto a novos desafios e oportunidades para aprender e crescer
            profissionalmente.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="mailto:felipesilv0607@gmail.com"
            className="contact-card"
          >
            <span className="contact-label">E-mail</span>
            <span className="contact-value">
              felipesilv0607@gmail.com
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/felipe-luz-8607533b5"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">
             https://www.linkedin.com/in/felipe-luz  →
            </span>
          </a>

          <a
            href="https://github.com/felipesilv0607-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">GitHub</span>
            <span className="contact-value">
              felipesilv0607-lab →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;