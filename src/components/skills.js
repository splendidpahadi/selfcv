"use client";

export default function SkillsPage({ isActive }) {
  const technologies = [
    // Languages & Frameworks
    "HTML",
    "CSS",
    "JS",
    "PHP",
    "Laravel",
    "React.js",
    "Python",
    "MySQL",
    "WordPress",

    // DevOps & Cloud
    "AWS",
    "Digital Ocean",
    "CI-CD",
    "Server Management",
    "Deployment",

    // Tools
    "Git",
    "GitHub",
    "VS Code",
    "GHL",
    "ClickFunnels",
    "Notion",
    "Asana",
    "Trello",
    "Basecamp",
    "ClickUp",
    "Google Workspace",
    "MS Office Suite",
    "SVN",
    "Jira",

    // Project & Process
    "Agile",
    "Scrum",
    "Kanban",
    "Waterfall",
    "Roadmap Planning",
    "Project Estimation",
    "Requirement Analysis",
    "Solution Optimization",
    "Team Leadership",
    "Client Communication",

    // Web & Marketing
    "SEO",
    "REST API",
    "Automations",
    "HubSpot",

    // Certifications (Conceptual Knowledge)
    "Cybersecurity Fundamentals",
    "AWS Cloud Practitioner",
    "Technical Support",
    "AI & Digital Transformation",
    "Excel for Business Analysis",
  ];

  return (
    <article
      className={`skills ${isActive ? "active" : ""}`}
      data-page="skills"
    >
      <header>
        <h2 className="h2 article-title">Skills &amp; Tech</h2>
      </header>

      {/* Technology Section */}
      <section className="technology">
        <h3 className="h3 skills-title">Technologies</h3>
        <div className="content-card">
          <div
            className="tech-badges"
            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-pill"
                style={{
                  backgroundColor: "#fbd36d",
                  color: "#000",
                  padding: "0.4rem 0.75rem",
                  fontSize: "0.875rem",
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
          {[
            { name: "Project Management & Leadership", value: 85 },
            { name: "Agile, Scrum & Kanban Methodologies", value: 80 },
            {
              name: "Web Development (PHP, Laravel, React.js, WordPress)",
              value: 85,
            },
            { name: "IT Strategy & Business Analysis", value: 80 },
            { name: "Cloud Platforms (AWS, DigitalOcean)", value: 75 },
            { name: "CRM & Automation (GHL, ClickFunnels, Zoho)", value: 70 },
            { name: "DevOps & CI/CD", value: 65 },
            { name: "Cybersecurity Fundamentals", value: 70 },
          ].map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
