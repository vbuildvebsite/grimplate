import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./login.styles.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="containerLogin" onSubmit={(e) => onSubmit(e)}>
      <h1>Login</h1>
      <form id="form" className="form-group">
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            required
            name="email"
            type="email"
            onChange={(e) => onChange(e)}
            id="email"
            value={email}
            placeholder="Enter the Email"
          />
        </div>
        {/* Enter Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => onChange(e)}
            id="password"
            placeholder="Enter the Password"
            name="password"
            value={password}
            required
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          />
        </div>

        <button type="submit" value="Login">
          Login
        </button>
        <Link to="/register">
          <button>Do not have a account Register</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
