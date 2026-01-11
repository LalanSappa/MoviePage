import React from "react";
import "./signUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const saveData = async () => {
    try {
      const response = await axios.post(
        "https://690f552045e65ab24ac350f7.mockapi.io/api/v1/users",
        formData
      );
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      console.log("Error in saving data", error);
    }
  };
  return (
    <>
      <div id="Register-Page">
        <div id="form">
          <h1 id="head">Register Page</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <br />
          <center>
          <button id="btn" onClick={() => { saveData(); navigate('/home'); }}>
            Register
          </button>
          </center>
          <br />
          <span id="link-btn" onClick={() => navigate('/login')}>Already have an account?Login</span>
        </div>
      </div>
    </>
  );
};

export default Register;