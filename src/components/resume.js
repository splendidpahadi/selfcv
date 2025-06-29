"use client";

export default function ResumePage({ isActive }) {
  return (
    <article className={`resume ${isActive ? "active" : ""}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

{/* resume download button */}
<section className="resumeDownload">
<a
  href="/assets/pdf/Priyanshu_Purohit_Resume_2025.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  title="Resume Priyanshu Purohit"
  className="form-btn"
  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "hsl(45, 100%, 72%)", textDecoration: "none" }}
>
  <ion-icon name="download" role="img" class="md hydrated" aria-label="paper plane"></ion-icon>
  <span>Download Resume</span>
</a>
</section>
 {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {[
  {
    title: "Technical Project Manager | Tech Arch Softwares",
    year: "Aug 2024 – Present",
    text: "Leading 18+ developers across 25+ projects. Managing client requirements, estimations, Agile delivery, and ensuring high-quality outputs."
  },
  {
    title: "Project Management Associate | GenY Medium",
    year: "Apr 2024 – May 2024",
    text: "Liaison between clients and tech teams. Led 9-member dev team, managed timelines, and ensured aligned delivery."
  },
  {
    title: "Website Lead | Himtech",
    year: "Oct 2023 – Mar 2024",
    text: "Handled ecommerce features and modular enhancements. Delivered integrations based on internal business needs."
  },
  {
    title: "Project Lead & Software Engineer | Pincox",
    year: "Oct 2021 – Sep 2023",
    text: "Led project delivery, requirement gathering, team tasking, and client solutions using PHP and custom CRMs."
  },
  {
    title: "Freelance Project Manager / Coordinator",
    year: "2021 – 2024",
    text: "Delivered websites, landing pages, and automation tools. Full-cycle handling: dev, hosting, deployment."
  },
  {
    title: "Web Development Intern | Technowebtech",
    year: "Jul 2020 – Jan 2021",
    text: "Worked on client applications, deployments, and gained hands-on security implementation experience."
  },
  {
    title: "Intern | The TechIntern",
    year: "Jun 2019",
    text: "Worked on data science modules, machine learning, and web security concepts like penetration testing."
  }
].map((exp, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.year}</span>
              <p className="timeline-text">
                {exp.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {[
  {
    title: "MBA (IT & Fintech) – Manipal University Jaipur (Online)",
    year: "2023",
    text: "Studied IT governance, fintech, and business-tech alignment in modern organizations."
  },
  {
    title: "B.Voc (Software Development) – Savitribai Phule Pune University",
    year: "2019 – 2021",
    text: "Focused on full-stack development, software engineering practices, and agile workflows."
  },
  {
    title: "D.Voc (Software Development) – UBTER",
    year: "2016 – 2019",
    text: "Built foundational skills in programming, systems, and databases through diploma coursework."
  }
].map((edu, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{edu.title}</h4>
              <span>{edu.year}</span>
              <p className="timeline-text">
                {edu.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

    </article>
  );
}
