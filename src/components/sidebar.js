"use client";

import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/assets/images/my-avatar.png"
            alt="Priyanshu Purohit"
            width={120}
            height={120}
            priority
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Priyanshu Purohit">
            Priyanshu Purohit
          </h1>
          <p className="title">IT Project Manager | Web Developer</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsActive(!isActive)}
          aria-expanded={isActive}
          data-sidebar-btn
        >
          <span>{isActive ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon
            name="chevron-down"
            style={{
              transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}
          ></ion-icon>
        </button>
      </div>

      <div className={`sidebar-info_more ${isActive ? "visible" : "hidden"}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          {[
            {
              icon: "mail-outline",
              title: "Email",
              value: "priyanshupurohit6@gmail.com",
              link: "mailto:priyanshupurohit6@gmail.com",
            },
            {
              icon: "phone-portrait-outline",
              title: "Phone",
              value: "+91 9927703176",
              link: "tel:+919927703176",
            },
            {
              icon: "calendar-outline",
              title: "Birthday",
              value: "Aug 05, 2000",
              isTime: true,
            },
            {
              icon: "location-outline",
              title: "Location",
              value: "Dehradun, Uttarakhand (248001)",
              isAddress: true,
            },
          ].map((item, index) => (
            <li key={index} className="contact-item">
              <div className="icon-box">
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">{item.title}</p>
                {item.isTime ? (
                  <time dateTime="2000-08-05">{item.value}</time>
                ) : item.isAddress ? (
                  <address>{item.value}</address>
                ) : (
                  <a href={item.link} className="contact-link">
                    {item.value}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {[
            { platform: "linkedin", url: "https://linkedin.com/in/priyanshu-purohit" },
            { platform: "github", url: "https://github.com/SplendidPahadi" },
            { platform: "instagram", url: "https://instagram.com/splendidpahadi" },
          ].map(({ platform, url }) => (
            <li key={platform} className="social-item">
              <a href={url} className="social-link" target="_blank" rel="noopener noreferrer">
                <ion-icon name={`logo-${platform}`}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
