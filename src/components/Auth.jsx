import { useState } from "react";
import "./auth.css";
import axios from "axios";
import { COHIRE_DOMAIN_IP } from "../commons";

function Auth() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    type: "Organization",
    gst: "",
    organization_location: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${COHIRE_DOMAIN_IP}accounts/login/`,
        signupData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Signup Response:", response);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${COHIRE_DOMAIN_IP}accounts/login/`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login Response:", response);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="authform">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignupSubmit}>
            <label htmlFor="chk" style={{ fontSize: "2rem" }}>
              Sign up
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
            />
            <input
              type="text"
              name="gst"
              placeholder="GST Number (optional)"
              value={signupData.gst}
              onChange={handleSignupChange}
            />
            <input
              type="text"
              name="organization_location"
              placeholder="Organization Location (optional)"
              value={signupData.organization_location}
              onChange={handleSignupChange}
            />
            <select
              name="type"
              value={signupData.type}
              onChange={handleSignupChange}
              className="typeSelection"
            >
              <option value="organization">Organization</option>
              <option value="employee">Employee</option>
            </select>

            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={handleLoginSubmit}>
            <label className="loginLabel" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
