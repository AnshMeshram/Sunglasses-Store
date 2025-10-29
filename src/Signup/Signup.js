import { useState } from "react";
import logo from './logo.png'; // Relative path to the logo
import './Signup.css'
import SignupNav from "./SignupNav";

function Main() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();

    // Validate Username
    if (username.trim() === "") {
      setErrorUserName("Username is required.");
      setUserColor("red");
    } else if (username.length < 8) {
      setErrorUserName("Username must be at least 8 characters long.");
      setUserColor("red");
    } else {
      setErrorUserName("");
      setUserColor("green");
    }

    // Validate Email
    if (email.trim() === "") {
      setErrorEmail("Email is required.");
      setEmailColor("red");
    } else if (!email.includes("@gmail.com")) {
      setErrorEmail("Email should include '@gmail.com'");
      setEmailColor("red");
    } else {
      setErrorEmail("");
      setEmailColor("green");
    }

    // Validate Password
    if (password.trim() === "") {
      setErrorPassword("Password is required.");
      setPasswordColor("red");
    } else if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long.");
      setPasswordColor("red");
    } else {
      setErrorPassword("");
      setPasswordColor("green");
    }

    // Validate Confirm Password
    if (confirmPassword.trim() === "") {
      setErrorConfirmPassword("Please confirm your password.");
      setConfirmPasswordColor("red");
    } else if (password !== confirmPassword) {
      setErrorConfirmPassword("Passwords do not match.");
      setConfirmPasswordColor("red");
    } else {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    }
  }

  return (
    <>
      <SignupNav />
      <div className="signupContainer">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <h2>Sign Up</h2>
        <div className="card">
          <form>
            <input
              type="text"
              placeholder="Name"
              style={{ borderColor: userColor }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="error">{errorUserName}</p>

            <input
              type="text"
              placeholder="Email"
              style={{ borderColor: emailColor }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{errorEmail}</p>

            <input
              type="password"
              placeholder="Password"
              style={{ borderColor: passwordColor }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>

            <input
              type="password"
              placeholder="Confirm Password"
              style={{ borderColor: confirmPasswordColor }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="error">{errorConfirmPassword}</p>

            <button className="submit-btn" onClick={validate}>
              Submit
            </button>
          </form>
        </div>
  </div>
    </>
  );
}

export default Main;
