import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo">
          Felipe<span>.dev</span>
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Início
          </a>

          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>

          <a href="#habilidades" onClick={() => setMenuOpen(false)}>
            Habilidades
          </a>

          <a href="#projetos" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>

          <a href="#contato" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;