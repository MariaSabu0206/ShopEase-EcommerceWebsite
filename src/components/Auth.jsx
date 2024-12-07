import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";
import { auth } from "./Firebase"; // Import Firebase authentication

const Auth = () => {
  const [email, setEmail] = useState(""); // State to store email input
  const [password, setPassword] = useState(""); // State to store password input
  const [isRegistering, setIsRegistering] = useState(false); // State to toggle between login and registration
  const [error, setError] = useState(""); // State to store error messages
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    // Clear error message after 6 seconds
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 6000);
    }
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [error]);

  const handleAuth = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      if (isRegistering) {
        // Handle registration
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful! Now Login using your registered mail and password");
      } else {
        // Handle login
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/home"); // Navigate to home page on successful login
      }
    } catch (error) {
      setError("Authentication failed. Please try again."); // Set error message on failure
    }
  };

  // Helper function to handle input changes and reset error
  const handleInputChange = (setter) => (e) => {
    setError(""); // Reset error message on input change
    setter(e.target.value);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isRegistering ? "Register" : "Login"}</h1>
        {/* Display error message if it exists */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="loginsignup-fields">
          {/* Email input field */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
          />
          {/* Password input field */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange(setPassword)}
            required
          />
        </div>
        {/* Button to handle login or registration */}
        <button onClick={handleAuth}>
          {isRegistering ? "Register" : "Login"}
        </button>
        <p className="loginsignup-login">
          {/* Toggle between login and registration */}
          {isRegistering
            ? "Already have an account? "
            : "Don't have an account? "}
          <span onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Login" : "Register here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
