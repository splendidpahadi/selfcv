"use client";

export default function Navbar({ activePage, onPageChange }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {[
          { name: "About", key: "about" },
          { name: "Resume", key: "resume" },
          { name: "Portfolio", key: "portfolio" },
          // { name: "Blog", key: "blog" },
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
