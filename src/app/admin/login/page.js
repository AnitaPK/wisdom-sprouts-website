"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, type: "login" }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token); // Save JWT
      window.location.href = "/admin/dashboard"; // Redirect
    } else {
      setMessage(data.error);
    }
  }

  return (
     <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src="/logo.png"
            alt="Institute Logo"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
        </div>

        <h3 className="text-center mb-3">Admin Login</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn custom-green-button w-100">
            Login
          </button>
        </form>

        {message && <p className="text-danger text-center mt-3">{message}</p>}
      </div>
    </div>
  );
}
