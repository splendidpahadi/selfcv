"use client"

import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import AboutPage from "../components/about";
import ResumePage from "../components/resume";
import SkillsPage from "../components/skills";
import PortfolioPage from "../components/portfolio";
import ContactPage from "../components/contact";

export default function Home() {
  const [activePage, setActivePage] = useState("about");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures component only renders on the client
  }, []);

  if (!isMounted) {
    return null; // Prevents hydration mismatch by not rendering anything until mounted
  }

  console.log("Active Page:", activePage); // Debugging

  const handlePageChange = (page) => {
    console.log("Changing Page To:", page); // Debugging
    setActivePage(page);
  };

  const handleOpenModal = (data) => {
    console.log("Opening Modal:", data);
  };

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} onPageChange={handlePageChange} />
        {activePage === "about" && <AboutPage isActive={true} onOpenModal={handleOpenModal} />}
        {activePage === "resume" && <ResumePage isActive={true} />}
        {activePage === "skills" && <SkillsPage isActive={true} />}
        {activePage === "portfolio" && <PortfolioPage isActive={true} />}
        {activePage === "contact" && <ContactPage isActive={true} />}
      </div>
    </main>
  );
}
