import React from "react";
import "../styles/homepage.css";

import isroLogo from "/isro-logo.webp";
import saheLogo from "/sahe-logo.png";

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      {/* Left brand — ISRO */}
      <div className="brand">
        <img
          className="institution-logo isro-logo"
          src={isroLogo}
          alt="ISRO logo"
        />
        <span style={{ fontFamily: "Georgia, serif" }}>
          ISRO
          <br />
          <small>Indian Space Research Organisation</small>
        </span>
      </div>

      {/* Centre title */}
      <div className="nav-title">
        Jal Sanchay
        <small>Geospatial Intelligence Platform</small>
      </div>

      {/* Right brand — SAHE */}
      <div className="brand right">
        <span style={{ fontFamily: "Georgia, serif" }}>
          Siddhartha Academy
          <br />
          <small>of Higher Education</small>
        </span>
        <img
          className="institution-logo sahe-logo"
          src={saheLogo}
          alt="SAHE logo"
        />
      </div>
    </nav>
  );
}
