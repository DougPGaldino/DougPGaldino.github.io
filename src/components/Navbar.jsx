import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo" onClick={e => handleLink(e, '#')}>
          <span className="logo-bracket">&lt;</span>
          DG
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => handleLink(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="btn btn-primary navbar-cta"
          onClick={e => handleLink(e, '#contato')}
        >
          Fale Comigo
        </a>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
