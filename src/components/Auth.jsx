import { useState } from "react";
import "./auth.css";
import axios from "axios";
import { COHIRE_DOMAIN_IP } from "../commons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth() {
  const [userType, setUserType] = useState("Organization");
  const [showPassword, setShowpassword] = useState(false);

  const [commonData, setCommonData] = useState({
    email: "",
    password: "",
  });

  const [organizationData, setOrganizationData] = useState({
    gst: "",
    organization_location: "",
  });

  const [employeeData, setEmployeeData] = useState({
    address: "",
  });

  const handleCommonChange = (e) => {
    const { name, value } = e.target;
    setCommonData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrganizationChange = (e) => {
    const { name, value } = e.target;
    setOrganizationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const signupPayload = {
      ...commonData,
      type: userType,
      ...(userType === "Organization" ? organizationData : employeeData),
    };

    try {
      const response = await axios.post(
        `${COHIRE_DOMAIN_IP}accounts/signup/`,
        signupPayload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Signup Success");
      }
    } catch (error) {
      toString.error("Error during signup:", error);
    }
    console.log("signup data is here :-", signupPayload);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${COHIRE_DOMAIN_IP}accounts/login/`,
        commonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Login success");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="authform">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={handleSignupSubmit} className="flex flex-col" >
            <label htmlFor="chk" style={{ fontSize: "2rem" }}>
              Sign up
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={commonData.email}
              onChange={handleCommonChange}
              required
            />
            <div className="flex justify-center m-auto items-center">
              <input
              className=""
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={commonData.password}
                onChange={handleCommonChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowpassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="fa fa-eye-slash" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-eye" aria-hidden="true"></i>
                )}
              </span>
            </div>

            {userType === "Organization" ? (
              <>
                <input
                  type="text"
                  name="gst"
                  placeholder="GST Number (optional)"
                  value={organizationData.gst}
                  onChange={handleOrganizationChange}
                />
                <input
                  type="text"
                  name="organization_location"
                  placeholder="Organization Location (optional)"
                  value={organizationData.organization_location}
                  onChange={handleOrganizationChange}
                />
              </>
            ) : (
              <input
                type="text"
                name="address"
                placeholder="Address (optional)"
                value={employeeData.address}
                onChange={handleEmployeeChange}
              />
            )}

            <select
              name="type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="typeSelection"
            >
              <option value="Organization">Organization</option>
              <option value="Employee">Employee</option>
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
              value={commonData.email}
              onChange={handleCommonChange}
              required
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={commonData.password}
              onChange={handleCommonChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowpassword(!showPassword)}
            >
              {showPassword ? (
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-eye" aria-hidden="true"></i>
              )}
            </span>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Auth;
