import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
  const [employeeCode, setEmployeeCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
const navigate =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(employeeCode==1211 && password=="abnews@123")
    {
      navigate('/postnews');
      sessionStorage.setItem("auth",true);
    }
    else{
      seterror("Wrong Credentials!");
    }
    // Handle login logic here
    console.log("Employee Code:", employeeCode);
    console.log("Password:", password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="card-title text-center mb-4">Employee Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Employee Code</label>
            <input
              type="text"
              value={employeeCode}
              onChange={(e) => setEmployeeCode(e.target.value)}
              className="form-control"
              placeholder="Enter your employee code"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
<p>{error}</p>
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
