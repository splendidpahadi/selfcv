"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioPage({ isActive }) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const projects = [
    { id: 1, title: "Sudesh Lehri", category: "web design", image: "/assets/images/projects/project-1.webp" },
    { id: 2, title: "ADK Instruments", category: "E-commerce", image: "/assets/images/projects/project-2.webp" },
    { id: 3, title: "Aravat Life Care", category: "web development", image: "/assets/images/projects/project-3.webp" },
    { id: 4, title: "Asira Foundation", category: "web design", image: "/assets/images/projects/project-4.webp" },
    { id: 5, title: "BPM", category: "E-commerce", image: "/assets/images/projects/project-5.webp" },
    { id: 6, title: "Career Institute", category: "web development", image: "/assets/images/projects/project-6.webp" },
    { id: 7, title: "Herbal RO", category: "web development", image: "/assets/images/projects/project-7.webp" },
    { id: 8, title: "KJSS", category: "E-commerce", image: "/assets/images/projects/project-8.webp" },
    { id: 9, title: "Longlifez", category: "web development", image: "/assets/images/projects/project-9.webp" },
    { id: 10, title: "Luster Online", category: "E-commerce", image: "/assets/images/projects/project-10.webp" },
    { id: 11, title: "mXGain", category: "E-commerce", image: "/assets/images/projects/project-11.webp" },
    { id: 12, title: "Super Smart", category: "E-commerce", image: "/assets/images/projects/project-12.webp" },
    { id: 13, title: "Oficin Advisor", category: "web development", image: "/assets/images/projects/project-13.webp" },
    { id: 14, title: "Paykun", category: "web design", image: "/assets/images/projects/project-14.webp" },
    { id: 15, title: "Shine life", category: "web development", image: "/assets/images/projects/project-15.webp" },
    { id: 16, title: "Smart tech solution", category: "web development", image: "/assets/images/projects/project-16.webp" },
    { id: 17, title: "Viable Life", category: "web development", image: "/assets/images/projects/project-17.webp" },
    { id: 18, title: "oflox", category: "web design", image: "/assets/images/projects/project-18.webp" },
  ]

  const categories = ["all", "web design", "applications", "web development","E-commerce"]

  const handleFilterClick = (category) => {
    setActiveCategory(category)
    setIsSelectOpen(false)
  }

  const toggleSelect = () => setIsSelectOpen(!isSelectOpen)

  return (
    <article className={`portfolio ${isActive ? "active" : ""}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter buttons for desktop */}
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter dropdown for mobile */}
        <div className="filter-select-box">
          <button className={`filter-select ${isSelectOpen ? "active" : ""}`} onClick={toggleSelect} data-select>
            <div className="select-value" data-select-value>
              {activeCategory === "all" ? "Select category" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${isSelectOpen ? "active" : ""}`}>
            {categories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => handleFilterClick(category)} data-select-item>
                  {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects grid */}
        <ul className="project-list">
          {projects
            .filter((project) => activeCategory === "all" || activeCategory === project.category)
            .map((project) => (
              <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <Image src={project.image} alt={project.title} width={300} height={200} loading="lazy" />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
        </ul>
      </section>
    </article>
  )
}
