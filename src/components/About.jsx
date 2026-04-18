import profilePhoto from '../assets/douglas.jpg';
import './About.css';

const highlights = [
  { icon: '🗄️', title: 'SQL Avançado', desc: 'Procedures, queries complexas, otimização e análise de dados em produção.' },
  { icon: '🐍', title: 'Python & Automação', desc: 'Scripts de automação, web scraping, análise de dados com Pandas e Selenium.' },
  { icon: '🤖', title: 'Foco em IA', desc: 'Transição ativa para soluções com Inteligência Artificial e Machine Learning.' },
];

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">// sobre mim</p>
            <h2 className="section-title">
              Dados, Código e <span>Resultados Reais</span>
            </h2>

            <p className="about-desc">
              Sou desenvolvedor com base sólida em suporte técnico e análise de dados,
              hoje focado em construir soluções que unem SQL, Python e Inteligência Artificial
              para resolver problemas de negócio de forma eficiente.
            </p>

            <p className="about-desc" style={{ marginTop: '16px' }}>
              Formado em <strong>Análise e Desenvolvimento de Sistemas</strong>, tenho experiência
              prática com criação de procedures, automações de processos e desenvolvimento
              com C# e ASP.NET Core. Acredito que código bem escrito é aquele que gera
              impacto mensurável.
            </p>

            <div className="about-tags">
              <span className="tag">SQL Server</span>
              <span className="tag cyan">Python</span>
              <span className="tag">C# / ASP.NET</span>
              <span className="tag cyan">Power BI</span>
              <span className="tag">Git / GitHub</span>
              <span className="tag cyan">Análise de Dados</span>
            </div>

            <div className="about-info">
              <div className="about-info-item">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Rio de Janeiro, Brasil
              </div>
              <div className="about-info-item">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Análise e Desenvolvimento de Sistemas
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="about-photo-wrap">
              <div className="about-photo-ring" />
              <div className="about-photo-ring about-photo-ring-2" />
              <img
                src={profilePhoto}
                alt="Douglas Galdino"
                className="about-photo"
              />
            </div>

            {highlights.map((item, i) => (
              <div key={i} className="about-highlight-card">
                <span className="about-highlight-icon">{item.icon}</span>
                <div>
                  <h3 className="about-highlight-title">{item.title}</h3>
                  <p className="about-highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="about-quote">
              <div className="about-quote-bar" />
              <p>"Soluções que geram impacto real — não apenas código que funciona."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
