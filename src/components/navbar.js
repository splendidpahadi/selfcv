"use client";

export default function Navbar({ activePage, onPageChange }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {[
          { name: "About", key: "about" },
          { name: "Resume", key: "resume" },
          { name: "Skills", key: "skills" },
          { name: "Portfolio", key: "portfolio" },
          { name: "Contact", key: "contact" },
        ].map(({ name, key }) => (
          <li key={key} className="navbar-item">
            <button
              className={`navbar-link ${activePage === key ? "active" : ""}`}
              onClick={() => onPageChange(key)}
              data-nav-link
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
