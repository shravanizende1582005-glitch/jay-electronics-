import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LockKeyhole,
  Mail,
  LogIn,
} from "lucide-react";

import "./AdminLogin.css";

// ===============================
// ADMIN LOGIN DETAILS
// ===============================
const ADMIN_EMAIL = "shravanizende1582005@gmail.com";
const ADMIN_PASSWORD = "123@";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Small delay for better login experience
    setTimeout(() => {
      if (
        email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
        password === ADMIN_PASSWORD
      ) {
        // Save login status
        sessionStorage.setItem("jeplAdminLoggedIn", "true");

        // Save admin email
        sessionStorage.setItem(
          "jeplAdminEmail",
          email.trim()
        );

        // Go to dashboard
        navigate("/admin");

      } else {
        setError("Invalid admin email or password.");
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        {/* Icon */}
        <div className="admin-login-icon">
          <LockKeyhole size={30} />
        </div>

        {/* Heading */}
        <h1>JEPL Admin</h1>

        <p className="admin-login-subtitle">
          Sign in to manage website enquiries
        </p>

        {/* Error */}
        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="admin-input-group">
            <label>Email Address</label>

            <div className="admin-input-wrapper">

              <Mail size={18} />

              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />

            </div>
          </div>

          {/* Password */}
          <div className="admin-input-group">
            <label>Password</label>

            <div className="admin-input-wrapper">

              <LockKeyhole size={18} />

              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />

            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            <LogIn size={18} />

            {loading
              ? "Signing in..."
              : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;