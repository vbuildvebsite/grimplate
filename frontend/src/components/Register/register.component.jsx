import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./register.styles.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2, number } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form id="form" className="form-group" onSubmit={(e) => onSubmit(e)}>
        {/* Full Name */}
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            minlength="3"
            maxlength="100"
            required
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
            type="text"
            id="name"
            placeholder="Enter the Name"
          />
        </div>
        {/* Phone Number */}
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            required
            maxlength="10"
            value={number}
            onChange={(e) => onChange(e)}
            type="tel"
            id="number"
            name="number"
            placeholder="9457353444"
          />
        </div>
        {/* Email */}
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            required
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            type="email"
            id="email"
            placeholder="Enter the Email"
          />
        </div>
        {/* Enter Password */}
        <div class="form-group">
          <label for="password1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            placeholder="Enter the Password"
            name="password"
            required
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          />
        </div>
        {/* Re Enter Password */}
        <div class="form-group">
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => onChange(e)}
            id="password2"
            placeholder="Confirm the Password(Min 8 Characters)"
            required
            name="password2"
            title="Please Include one upper and lowercase and one special character and one number for ur safety"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          />
        </div>

        <button type="submit" value="Register">Register</button>
        <Link to="/login">
          <button>Already have a account? Login</button>
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
