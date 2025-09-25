"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import illustration from "./assets/image/login-illustration.png";
import logo from "./assets/image/logo.svg";
import "./style/login.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      router.push("/dashboard");
    }
  };

  return (
    <main className="login-container">
      <div className="login-left">
        <Image src={logo} alt="Lendsqr Logo" className="logo" />
        <div className="illustration-container">
          <Image
            src={illustration}
            alt="Illustration"
            className="illustration"
          />
        </div>
      </div>

      <div className="login-right">
        <Image src={logo} alt="Lendsqr Logo" className="logo-mobile" />
        <h1 className="welcome">Welcome!</h1>
        <p className="subtitle">Enter details to login.</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" " // important for :placeholder-shown
              required
            />
            <label>Email</label>
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" " // important for floating label
              required
            />
            <label>Password</label>
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>

          <button type="submit" className="btn-primary">
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
