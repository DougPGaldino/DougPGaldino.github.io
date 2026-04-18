import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#" className="footer-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="logo-bracket">&lt;</span>DG<span className="logo-bracket">/&gt;</span>
        </a>

        <p className="footer-copy">
          © {year} Douglas Galdino · Feito com React
        </p>

        <button
          className="footer-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          Topo
        </button>
      </div>
    </footer>
  );
}
