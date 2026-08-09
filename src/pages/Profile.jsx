import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {
  const { user, logout } = useAuth();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    // Persist via API here if needed: api.updateProfile({ name })
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 128px)",
          background: "#f0f6fb",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(11,77,120,0.12)",
            padding: "40px 36px",
            width: "100%",
            maxWidth: "480px",
          }}
        >
          {/* Avatar */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#0b4d78",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {user?.name?.[0]?.toUpperCase() || "U"}
            </div>
            <div>
              <h1 style={{ color: "#0b4d78", fontSize: "1.5rem", fontWeight: "700", margin: 0 }}>
                {user?.name || "User"}
              </h1>
              <p style={{ color: "#888", fontSize: "0.9rem", margin: "4px 0 0" }}>
                {user?.email || ""}
              </p>
            </div>
          </div>

          {saved && (
            <div
              role="status"
              style={{
                background: "#e8f8ef",
                border: "1px solid #a8dfc1",
                color: "#1a7a4a",
                borderRadius: "8px",
                padding: "10px 14px",
                marginBottom: "20px",
                fontSize: "0.9rem",
              }}
            >
              Profile updated successfully.
            </div>
          )}

          {editing ? (
            <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.9rem", color: "#333" }}>
                Display Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={inputStyle}
                />
              </label>
              <div style={{ display: "flex", gap: "12px" }}>
                <button type="submit" style={primaryBtn}>Save</button>
                <button type="button" onClick={() => setEditing(false)} style={secondaryBtn}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <InfoRow label="Name" value={user?.name || "—"} />
              <InfoRow label="Email" value={user?.email || "—"} />
              <InfoRow label="Role" value={user?.role || "Researcher"} />

              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button onClick={() => setEditing(true)} style={primaryBtn}>
                  Edit Profile
                </button>
                <button onClick={logout} style={{ ...secondaryBtn, color: "#c0392b", borderColor: "#f5c6c6" }}>
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{ borderBottom: "1px solid #eef4f9", paddingBottom: "16px" }}>
      <p style={{ color: "#888", fontSize: "0.8rem", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {label}
      </p>
      <p style={{ color: "#1a2e3b", fontWeight: "500", margin: 0 }}>{value}</p>
    </div>
  );
}

const inputStyle = {
  border: "1px solid #cce0f0",
  borderRadius: "8px",
  padding: "10px 14px",
  fontSize: "0.95rem",
  outline: "none",
};

const primaryBtn = {
  background: "#0b4d78",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "0.95rem",
  fontWeight: "600",
  cursor: "pointer",
};

const secondaryBtn = {
  background: "transparent",
  color: "#0b4d78",
  border: "1px solid #cce0f0",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "0.95rem",
  fontWeight: "600",
  cursor: "pointer",
};
