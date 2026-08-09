import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "About", path: "/about" },
  { label: "Profile", path: "/profile" },
  { label: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  return (
    <aside
      style={{
        width: isOpen ? "220px" : "60px",
        minHeight: "100vh",
        background: "#0b4d78",
        color: "#eaf5f6",
        transition: "width 0.3s ease",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          background: "none",
          border: "none",
          color: "#eaf5f6",
          cursor: "pointer",
          fontSize: "1.4rem",
          padding: "16px",
          alignSelf: "flex-end",
        }}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isOpen ? "←" : "→"}
      </button>

      {/* Navigation links */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "8px 0" }}>
        {navItems.map(({ label, path }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 20px",
                color: active ? "#ffffff" : "#b3d4e8",
                background: active ? "rgba(255,255,255,0.15)" : "transparent",
                textDecoration: "none",
                fontWeight: active ? "600" : "400",
                whiteSpace: "nowrap",
                borderLeft: active ? "3px solid #fff" : "3px solid transparent",
                transition: "background 0.2s",
              }}
            >
              {isOpen && label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
