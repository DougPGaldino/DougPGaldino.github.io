import './Highlights.css';

const areas = [
  {
    id: 'automation',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: 'Automação',
    color: 'purple',
    title: 'Processos Automáticos que Escalam',
    desc: 'Desenvolvimento de scripts e bots que eliminam trabalho manual repetitivo. De coleta de dados até integração com sistemas externos — se é repetível, é automatizável.',
    items: [
      'Selenium para interações com sistemas web',
      'Pandas para transformação e limpeza de dados',
      'Integração com APIs externas',
      'Bots para notificações e alertas em tempo real',
    ],
  },
  {
    id: 'dados',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    label: 'Dados',
    color: 'cyan',
    title: 'SQL e Análise que Geram Decisões',
    desc: 'Domínio avançado em SQL Server para modelagem, extração e análise de dados complexos. Criação de procedures, views e relatórios que transformam dados brutos em insights.',
    items: [
      'Procedures e funções SQL Server complexas',
      'Otimização de queries em grandes volumes',
      'Dashboards interativos com Power BI',
      'Análise exploratória com Python/Pandas',
    ],
  },
  {
    id: 'ia',
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-2.5 2.5h0A2.5 2.5 0 017 19.5v-1A2.5 2.5 0 014.5 16h0A2.5 2.5 0 012 13.5V10A2.5 2.5 0 014.5 7.5H5" />
        <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 002.5 2.5h0a2.5 2.5 0 002.5-2.5v-1A2.5 2.5 0 0119.5 16h0a2.5 2.5 0 002.5-2.5V10a2.5 2.5 0 00-2.5-2.5H19" />
      </svg>
    ),
    label: 'Inteligência Artificial',
    color: 'pink',
    title: 'Construindo o Próximo Nível',
    desc: 'Evolução ativa para desenvolvimento de soluções com IA. Aplicando conhecimento em dados e automação como base para criar sistemas inteligentes.',
    items: [
      'Machine Learning com scikit-learn',
      'Integração com APIs de LLMs (OpenAI, etc.)',
      'Análise preditiva sobre dados históricos',
      'Automação inteligente com NLP',
    ],
    badge: 'Em aprendizado ativo',
  },
];

const colorMap = {
  purple: { border: 'rgba(108,99,255,0.3)', bg: 'rgba(108,99,255,0.08)', text: '#6c63ff', glow: 'rgba(108,99,255,0.2)' },
  cyan:   { border: 'rgba(0,212,255,0.3)',  bg: 'rgba(0,212,255,0.08)',  text: '#00d4ff', glow: 'rgba(0,212,255,0.15)' },
  pink:   { border: 'rgba(255,101,132,0.3)', bg: 'rgba(255,101,132,0.08)', text: '#ff6584', glow: 'rgba(255,101,132,0.15)' },
};

export default function Highlights() {
  return (
    <section id="destaques" className="section highlights">
      <div className="container">
        <div className="section-header">
          <p className="section-label">// áreas de atuação</p>
          <h2 className="section-title">
            Onde Entrego <span>Valor Real</span>
          </h2>
          <p className="section-desc">
            Três pilares que definem meu trabalho técnico — cada um com projetos práticos e resultados concretos.
          </p>
        </div>

        <div className="highlights-grid">
          {areas.map(area => {
            const c = colorMap[area.color];
            return (
              <div
                key={area.id}
                className="highlight-card"
                style={{ '--card-border': c.border, '--card-bg': c.bg, '--card-text': c.text, '--card-glow': c.glow }}
              >
                <div className="highlight-card-top">
                  <div className="highlight-icon" style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}>
                    {area.icon}
                  </div>
                  <div className="highlight-labels">
                    <span className="highlight-area-label" style={{ color: c.text }}>{area.label}</span>
                    {area.badge && (
                      <span className="highlight-badge" style={{ background: c.bg, borderColor: c.border, color: c.text }}>
                        {area.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="highlight-title">{area.title}</h3>
                <p className="highlight-desc">{area.desc}</p>

                <ul className="highlight-list">
                  {area.items.map((item, i) => (
                    <li key={i}>
                      <span className="highlight-bullet" style={{ background: c.text }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
