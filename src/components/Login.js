import React, { useState } from "react";
const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Enter valid values");
      return;
    }
    setIsLoggedIn(true);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="">
        <h1
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Sign Up
        </h1>
        <form
          className=""
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "2rem",
            maxWidth: "50vw",
          }}
        >
          <input
            type="email"
            className=""
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{
              padding: "0.2rem",
            }}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{
              padding: "0.2rem",
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
