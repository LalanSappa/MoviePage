import react from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const Checking = async () => {
    try {
      const response = await axios.get(
        "https://690f552045e65ab24ac350f7.mockapi.io/api/v1/users"
      );
      const data = response.data;
      const user = data.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (user) {
        alert("Successful");
      } else {
        alert("Invalid");
      }
      console.log(response, "Data fetched successfully");
    } catch (error) {
      console.log("Error in saving data", error);
    }
  };
  return (
    <>
      <div id="Login-Page">
        <div id="form">
          <h1 id="head">Login Page</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
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
          <button id="btn" onClick={() => { Checking(); navigate('/home'); }}>
            Login
          </button>
          <br></br>
          <span id="link-btn" onClick={() => navigate('/signup')}>Don't have an account? Sign Up</span>
        </div>
      </div>
    </>
  );
};

export default Login;