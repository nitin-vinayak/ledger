import "./Login.css";

import { useState } from "react";
import {useNavigate } from "react-router-dom"
import axios from "axios";

export default function LoginFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", { email, password })
      .then((res) => {
        if (res.data === "Login Successful") {
          navigate("/dashboard"); 
        } else {
          alert(res.data);
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Login Failed");
      });
  }
  
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="parent">
          <h3>Login</h3>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button value="Submit"> Login </button>
        </div>
      </form>
    </>
  );
}
