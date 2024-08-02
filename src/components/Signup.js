import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const signData = { name, email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        signData
      );

      console.log(response);

      if (response.status === 200) {
        console.log("Signup successful");
        navigate("/login");
      } else {
        console.log("Signup failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error occurred during signup:", error);

      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // Request was made but no response received
        console.error("Request data:", error.request);
      } else {
        // Something else caused the error
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={handleName}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={handleEmail}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={handlePassword}
              className="form-control rounded-0"
            />
          </div>

          
            <Link
            to="/login"
              type="button"
            //   onClick={handleClick}
              className="btn btn-border border-1 bg-danger text-white mt-3"
            >
              Sign Up
            </Link>
         

          <div className="bg-white mt-3 rounded w-100">
            <Link to="/login" className="text-black text-decoration-none">
              Already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
