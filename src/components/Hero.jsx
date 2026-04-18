import { useEffect, useRef } from 'react';
import './Hero.css';

const roles = [
  'SQL Developer',
  'Python Automation',
  'Data Analyst',
  'AI Enthusiast',
];

export default function Hero() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;

    const type = () => {
      const current = roles[indexRef.current];

      if (!deletingRef.current) {
        charRef.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charRef.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
        }
      }

      timeout = setTimeout(type, deletingRef.current ? 60 : 100);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Disponível para oportunidades
        </div>

        <h1 className="hero-name">
          Douglas <span>Galdino</span>
        </h1>

        <div className="hero-role-line">
          <span ref={roleRef} className="hero-role-text" />
          <span className="hero-cursor" />
        </div>

        <p className="hero-desc">
          Transformo dados em decisões e processos em automações.
          <br />
          SQL avançado · Python · C# · Power BI · Inteligência Artificial
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('#projetos')}
          >
            Ver Projetos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollTo('#contato')}
          >
            Contato
          </button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">3+</span>
            <span className="hero-stat-label">Projetos Reais</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">SQL</span>
            <span className="hero-stat-label">Nível Avançado</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">RJ</span>
            <span className="hero-stat-label">Rio de Janeiro</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
