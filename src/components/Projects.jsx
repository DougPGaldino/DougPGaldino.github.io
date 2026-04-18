import './Projects.css';

const projects = [
  {
    id: 1,
    featured: true,
    label: 'Automação & Dados',
    labelColor: 'purple',
    title: 'Automação de Dados – Localizar CNS',
    desc: 'Automação desenvolvida para identificar e corrigir dados faltantes em registros de saúde (CNS). O sistema varre a base de dados, localiza inconsistências e integra com sistema externo para preenchimento automático — eliminando horas de trabalho manual.',
    problem: 'Registros sem CNS comprometiam a qualidade dos dados e geravam retrabalho manual.',
    impact: 'Melhoria significativa na qualidade e completude dos dados de saúde.',
    techs: ['Python', 'Pandas', 'Selenium', 'SQL Server'],
    techColors: ['purple', 'cyan', 'cyan', 'purple'],
    github: 'https://github.com/galdino01',
    icon: '🤖',
  },
  {
    id: 2,
    featured: true,
    label: 'Bot & Web Scraping',
    labelColor: 'cyan',
    title: 'Bot Telegram com Web Scraping',
    desc: 'Bot funcional no Telegram para apoio comercial, com web scraping automatizado, filtros personalizados de busca e geolocalização. Permite que equipes comerciais recebam oportunidades filtradas diretamente no chat.',
    problem: 'Processo de prospecção manual era lento e sem filtros inteligentes de localização.',
    impact: 'Entrega automática de oportunidades com geolocalização para equipe comercial.',
    techs: ['Python', 'Requests', 'BeautifulSoup', 'Geopy', 'Telegram API'],
    techColors: ['purple', 'cyan', 'cyan', 'pink', 'cyan'],
    github: 'https://github.com/galdino01',
    icon: '📡',
  },
  {
    id: 3,
    featured: false,
    label: 'Sistema Web',
    labelColor: 'pink',
    title: 'Sistema de Gestão Financeira',
    desc: 'Aplicação web completa para controle de finanças pessoais com dashboard interativo. Permite registro de receitas, despesas e investimentos, com geração de relatórios e visualizações para tomada de decisão.',
    problem: 'Ausência de ferramenta centralizada para acompanhamento financeiro com relatórios.',
    impact: 'Visão consolidada das finanças com relatórios gerados automaticamente.',
    techs: ['Django', 'Python', 'SQL', 'HTML/CSS'],
    techColors: ['pink', 'purple', 'cyan', 'pink'],
    github: 'https://github.com/galdino01',
    icon: '💰',
  },
  {
    id: 4,
    featured: false,
    label: 'Desktop App',
    labelColor: 'cyan',
    title: 'Sistema de Gestão de Ordem de Serviço',
    desc: 'Aplicação desktop completa para gerenciamento de ordens de serviço em assistência técnica. Controla todo o ciclo do atendimento — do recebimento do equipamento até a entrega — com rastreamento de peças, histórico de serviços e geração de relatórios em PDF.',
    problem: 'Gestão manual de ordens de serviço gerava erros e perda de histórico dos atendimentos.',
    impact: 'Fluxo de trabalho organizado com 8 status de acompanhamento, gestão de clientes e emissão de OS em PDF.',
    techs: ['Python', 'PySide6', 'SQLite', 'SQLAlchemy', 'ReportLab'],
    techColors: ['purple', 'cyan', 'cyan', 'purple', 'pink'],
    github: null,
    icon: '🛠️',
    private: true,
  },
  {
    id: 5,
    featured: false,
    label: 'RAD & Web App',
    labelColor: 'purple',
    title: 'Sistema de Gestão de Proponentes',
    desc: 'Aplicação web para gerenciar proponentes de uma associação, permitindo cadastro inicial, controle de valores de contribuição e acompanhamento do pipeline de prospecção até a finalização do contrato.',
    problem: 'Processo de prospecção de associados era manual, sem rastreamento do estágio de cada candidato.',
    impact: 'Pipeline de prospecção estruturado com cadastro e acompanhamento centralizado.',
    techs: ['Python', 'Streamlit', 'SQLite'],
    techColors: ['purple', 'cyan', 'cyan'],
    github: 'https://github.com/DougPGaldino/RAD-Python',
    icon: '🏢',
  },
  {
    id: 6,
    featured: false,
    label: 'Big Data & BI',
    labelColor: 'pink',
    title: 'Pipeline de Extração e Análise de Big Data',
    desc: 'Pipeline de processamento de múltiplos arquivos PDF com Apache Spark, extraindo dados e convertendo automaticamente para Excel. O resultado alimenta dashboards no Power BI para geração de insights e apoio à decisão.',
    problem: 'Extração manual de dados de PDFs era inviável em escala e não permitia análise consolidada.',
    impact: 'Processamento automatizado em lote com saída estruturada pronta para consumo no Power BI.',
    techs: ['Apache Spark', 'Python', 'Java', 'Power BI'],
    techColors: ['pink', 'purple', 'cyan', 'cyan'],
    github: 'https://github.com/DougPGaldino/big-data-final-work',
    icon: '📊',
  },
];

const tagColorClass = { purple: '', cyan: 'cyan', pink: 'pink' };

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">// projetos</p>
          <h2 className="section-title">
            Código que <span>Resolve Problemas</span>
          </h2>
          <p className="section-desc">
            Projetos reais, com problema definido, solução aplicada e impacto mensurável.
          </p>
        </div>

        <div className="projects-list">
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-card${project.featured ? ' featured' : ''}`}
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <div className="project-icon-wrap">
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  <div className="project-meta">
                    <span className={`tag${tagColorClass[project.labelColor] ? ' ' + tagColorClass[project.labelColor] : ''}`}>
                      {project.label}
                    </span>
                    {project.featured && (
                      <span className="project-featured-badge">Destaque</span>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-problem">
                  <div className="project-problem-item">
                    <span className="project-problem-label">
                      <svg width="13" height="13" fill="none" stroke="#ff6584" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Problema
                    </span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-problem-item">
                    <span className="project-problem-label">
                      <svg width="13" height="13" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Impacto
                    </span>
                    <p>{project.impact}</p>
                  </div>
                </div>

                <div className="project-footer">
                  <div className="project-techs">
                    {project.techs.map((tech, i) => (
                      <span
                        key={tech}
                        className={`tag${tagColorClass[project.techColors[i]] ? ' ' + tagColorClass[project.techColors[i]] : ''}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Ver no GitHub
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="project-private-label">
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                      Repositório privado
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Mais projetos em desenvolvimento</p>
          <a href="https://github.com/DougPGaldino" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Ver GitHub Completo
          </a>
        </div>
      </div>
    </section>
  );
}
