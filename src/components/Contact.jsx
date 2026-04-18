import './Contact.css';

const links = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'galdinod64@gmail.com',
    href: 'mailto:galdinod64@gmail.com',
    color: 'purple',
    desc: 'Melhor forma de contato direto',
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/douglas-galdino',
    href: 'https://www.linkedin.com/in/douglas-galdino-3b511b214/',
    color: 'cyan',
    desc: 'Conecte-se profissionalmente',
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/DougPGaldino',
    href: 'https://github.com/DougPGaldino',
    color: 'pink',
    desc: 'Veja meu código e projetos',
  },
];

const colorMap = {
  purple: { bg: 'rgba(108,99,255,0.08)', border: 'rgba(108,99,255,0.25)', text: '#6c63ff', hover: 'rgba(108,99,255,0.15)' },
  cyan:   { bg: 'rgba(0,212,255,0.08)',  border: 'rgba(0,212,255,0.2)',  text: '#00d4ff', hover: 'rgba(0,212,255,0.12)' },
  pink:   { bg: 'rgba(255,101,132,0.08)', border: 'rgba(255,101,132,0.2)', text: '#ff6584', hover: 'rgba(255,101,132,0.12)' },
};

export default function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-header">
            <p className="section-label">// contato</p>
            <h2 className="section-title">
              Vamos <span>Trabalhar Juntos</span>
            </h2>
            <p className="contact-text">
              Estou disponível para oportunidades em dados, automação e desenvolvimento.
              Se você busca um profissional que entrega soluções reais com SQL, Python e foco
              em resultado — fale comigo.
            </p>
          </div>

          <div className="contact-cards">
            {links.map(link => {
              const c = colorMap[link.color];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-card"
                  style={{ '--cc-bg': c.bg, '--cc-border': c.border, '--cc-text': c.text, '--cc-hover': c.hover }}
                >
                  <div className="contact-card-icon" style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}>
                    {link.icon}
                  </div>
                  <div className="contact-card-info">
                    <span className="contact-card-label">{link.label}</span>
                    <span className="contact-card-value">{link.value}</span>
                    <span className="contact-card-desc">{link.desc}</span>
                  </div>
                  <div className="contact-card-arrow">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="contact-availability">
            <div className="availability-dot" />
            <p>Disponível para novas oportunidades — respondo em até 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
