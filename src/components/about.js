"use client";

import Image from "next/image";

export default function AboutPage({ isActive, onOpenModal }) {
  const testimonials = [
    {
      id: 1,
      avatar: "/assets/images/avatar-1.png",
      name: "Daniel Lewis",
      text: "Priyanshu is a highly skilled project manager with a deep understanding of software development. His ability to streamline processes and enhance team productivity is impressive.",
    },
    {
      id: 2,
      avatar: "/assets/images/avatar-2.png",
      name: "Jessica Miller",
      text: "Working with Priyanshu has been a great experience. His problem-solving approach and technical expertise have significantly improved our project workflows",
    },
    {
      id: 3,
      avatar: "/assets/images/avatar-3.png",
      name: "Emily Evans",
      text: "Priyanshu played a crucial role in our project’s success. His leadership, technical guidance, and strategic decision-making ensured a smooth and efficient development cycle.",
    },
    {
      id: 4,
      avatar: "/assets/images/avatar-4.png",
      name: "Henry William",
      text: "A results-driven professional! Priyanshu’s insights into IT strategy and automation have helped us optimize our business processes effectively.",
    },
  ];

  const handleTestimonialClick = (testimonial) => {
    onOpenModal({
      img: testimonial.avatar,
      title: testimonial.name,
      text: testimonial.text,
    });
  };

  return (
    <article className={`about ${isActive ? "active" : ""}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          Results-driven Technical Project Manager with 5+ years of
          experience leading cross-functional teams and delivering
          client-focused web and SaaS products. I specialize in Agile project
          execution, requirement analysis, and technical delivery across
          startups and mid-sized tech organizations.
        </p>
        <p>
          My development background spans full-stack technologies including PHP,
          Laravel, React.js, and MySQL. I’ve led projects from concept to
          deployment using AWS, DigitalOcean, and CI/CD pipelines—balancing both
          technical leadership and client-facing responsibilities.
        </p>
        <p>
          I also implement low-code automation and CRM workflows using tools
          like GoHighLevel, ClickFunnels, HubSpot, and Zoho. My passion lies in
          streamlining processes and enabling business growth through strategic
          planning, cloud integration, and emerging technologies such as AI and
          cybersecurity.
        </p>
      </section>

      {/* Service Section */}
      <section className="service">
        <h3 className="h3 service-title">What I am Doing</h3>

        <ul className="service-list">
          {[
            {
              title: "Project & Delivery Management",
              desc: "Managing end-to-end software delivery, sprint planning, and stakeholder communication using Agile, Scrum, and Kanban.",
              icon: "/assets/images/icon-design.svg",
            },
            {
              title: "Custom Web Development",
              desc: "Building full-stack applications using Laravel, PHP, React.js, and MySQL with scalable deployment on AWS and DigitalOcean.",
              icon: "/assets/images/icon-dev.svg",
            },
            {
              title: "Automation & CRM Workflows",
              desc: "Creating sales funnels and workflow automations using tools like GHL, ClickFunnels, Zoho, and HubSpot.",
              icon: "/assets/images/icon-app.svg",
            },
            {
              title: "Cloud & Tech Strategy",
              desc: "Integrating AI concepts, cloud architectures, and secure infrastructure with a focus on business optimization.",
              icon: "/assets/images/icon-photo.svg",
            },
          ].map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={40}
                  height={40}
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-item">
              <div
                className="content-card"
                data-testimonials-item
                onClick={() => handleTestimonialClick(testimonial)}
              >
                <figure className="testimonials-avatar-box">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={80}
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Clients Section */}
      {/* <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className="clients-item">
              <a href="#">
                <Image src={`/assets/images/logo-${i + 1}.png`} alt={`Client ${i + 1}`} width={120} height={50} />
              </a>
            </li>
          ))}
        </ul>
      </section> */}
    </article>
  );
}
