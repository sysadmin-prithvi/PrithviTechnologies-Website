import React from "react";

export default function Layout({ title, children }) {
  return (
    <div className="app-bg">
      <header style={{ width: "100%", padding: "24px 0 8px 0", background: "#fff", textAlign: "center" }}>
        <h1 className="app-title" style={{ color: "#000", margin: 0 }}>Annotation Tracker</h1>
        {title && <h2 style={{ color: "#1976d2", margin: "16px 0 0 0" }}>{title}</h2>}
      </header>
      <div className="app-container" style={{ marginTop: 24 }}>
        {children}
      </div>
    </div>
  );
}