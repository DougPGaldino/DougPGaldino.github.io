import './Skills.css';

const skillGroups = [
  {
    category: 'Banco de Dados',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', level: 90, color: 'purple' },
      { name: 'T-SQL / Procedures', level: 88, color: 'purple' },
      { name: 'Modelagem de Dados', level: 78, color: 'purple' },
    ],
  },
  {
    category: 'Linguagens',
    icon: '💻',
    skills: [
      { name: 'Python', level: 78, color: 'cyan' },
      { name: 'C#', level: 60, color: 'cyan' },
      { name: 'SQL', level: 90, color: 'cyan' },
    ],
  },
  {
    category: 'Frameworks & Libs',
    icon: '📦',
    skills: [
      { name: 'ASP.NET Core', level: 58, color: 'pink' },
      { name: 'Django', level: 65, color: 'pink' },
      { name: 'Pandas / Selenium', level: 80, color: 'pink' },
    ],
  },
  {
    category: 'Ferramentas',
    icon: '🔧',
    skills: [
      { name: 'Power BI', level: 75, color: 'yellow' },
      { name: 'Git / GitHub', level: 72, color: 'yellow' },
      { name: 'BeautifulSoup', level: 76, color: 'yellow' },
    ],
  },
];

const toolPills = [
  'SQL Server', 'Python', 'C#', 'ASP.NET Core', 'Django',
  'Pandas', 'Selenium', 'BeautifulSoup', 'Requests',
  'Power BI', 'Git', 'GitHub', 'Geopy', 'Telegram Bot API',
];

const colorBar = {
  purple: 'linear-gradient(90deg, #6c63ff, #9c8fff)',
  cyan:   'linear-gradient(90deg, #00d4ff, #00f5cc)',
  pink:   'linear-gradient(90deg, #ff6584, #ff8fa3)',
  yellow: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">// habilidades técnicas</p>
          <h2 className="section-title">
            Stack <span>Principal</span>
          </h2>
          <p className="section-desc">
            Ferramentas e tecnologias que utilizo no dia a dia para construir soluções reais.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.category} className="skill-group">
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <h3 className="skill-group-title">{group.category}</h3>
              </div>

              <div className="skill-bars">
                {group.skills.map(skill => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-meta">
                      <span className="skill-bar-name">{skill.name}</span>
                      <span className="skill-bar-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: colorBar[skill.color],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-pills-section">
          <p className="skills-pills-label">Todas as tecnologias</p>
          <div className="skills-pills">
            {toolPills.map(pill => (
              <span key={pill} className="skill-pill">{pill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
