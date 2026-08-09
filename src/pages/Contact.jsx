import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Replace with actual API call: await api.sendContactMessage(form)
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "calc(100vh - 128px)",
          background: "#f0f6fb",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "640px" }}>
          <div style={{ marginBottom: "40px" }}>
            <p style={{ color: "#0b4d78", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.85rem" }}>
              Get in Touch
            </p>
            <h1 style={{ color: "#0b4d78", fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: "700", margin: "8px 0 12px" }}>
              Contact Us
            </h1>
            <p style={{ color: "#555", lineHeight: "1.7" }}>
              Have questions about Jal Sanchay or the GEE Indexing platform? Reach out and we&apos;ll get back to you.
            </p>
          </div>

          {submitted ? (
            <div
              role="status"
              style={{
                background: "#e8f8ef",
                border: "1px solid #a8dfc1",
                color: "#1a7a4a",
                borderRadius: "12px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>✓</div>
              <h2 style={{ margin: "0 0 8px", color: "#1a7a4a" }}>Message Sent!</h2>
              <p style={{ margin: 0, color: "#2d6a4f" }}>
                Thank you for reaching out. We&apos;ll respond within 1–2 business days.
              </p>
            </div>
          ) : (
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(11,77,120,0.1)",
                padding: "40px 36px",
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <label style={labelStyle}>
                    Name
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </label>
                  <label style={labelStyle}>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      style={inputStyle}
                    />
                  </label>
                </div>

                <label style={labelStyle}>
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    style={inputStyle}
                  />
                </label>

                <label style={labelStyle}>
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here…"
                    style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "#0b4d78",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "13px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          )}

          {/* Contact details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {[
              { icon: "📍", label: "Location", value: "JNTU Kakinada, AP" },
              { icon: "✉️", label: "Email", value: "geeindexing@jntuk.edu.in" },
              { icon: "🕐", label: "Response Time", value: "1–2 business days" },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(11,77,120,0.08)",
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{icon}</div>
                <p style={{ color: "#888", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 4px" }}>
                  {label}
                </p>
                <p style={{ color: "#0b4d78", fontWeight: "600", margin: 0, fontSize: "0.9rem" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  fontSize: "0.9rem",
  color: "#333",
};

const inputStyle = {
  border: "1px solid #cce0f0",
  borderRadius: "8px",
  padding: "10px 14px",
  fontSize: "0.95rem",
  outline: "none",
  transition: "border-color 0.2s",
};
