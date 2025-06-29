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
            { title: "Technical Project Manager | Tech Arch Softwares", year: "(2024 - Present)" },
            { title: "Project Management Associate | GenY Medium", year: "(2024)" },
            { title: "Website Lead | Himtech", year: "(2023 - 2024)" },
            { title: "Project Lead & Software Engineer | Pincox", year: "(2021 - 2023)" },
            { title: "Project Manager / Coordinator (Freelance)", year: "(2020 - 2021)" },
            { title: "Web Development Intern | Technowebtech", year: "(2020)" },
            { title: "Data Science & Cybersecurity Intern | The TechIntern", year: "(2020)" },
          ].map((exp, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.year}</span>
              <p className="timeline-text">
                Managed multiple projects, led teams, and implemented efficient workflows using Agile methodologies. Hands-on experience in web development, cloud solutions, and IT strategy.
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
            { title: "MBA (IT & Fintech) – Manipal University Jaipur", year: "2021 — 2023" },
            { title: "B.Voc (Software Development) – Savitribai Phule Pune University", year: "2019 — 2021" },
            { title: "D.Voc (Software Development) – UBTER", year: "2016 — 2019" },
          ].map((edu, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{edu.title}</h4>
              <span>{edu.year}</span>
              <p className="timeline-text">
                Focused on software development, IT strategy, and business technologies, gaining hands-on experience in Agile project management and cloud computing.
              </p>
            </li>
          ))}
        </ol>
      </section>

    </article>
  );
}
