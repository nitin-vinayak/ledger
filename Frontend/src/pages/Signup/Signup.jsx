import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './Signup.css'

export default function SignupFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    axios.post("http://localhost:8081/signup", { email, password })
      .then((res) => {
        if (res.status === 201) {
          alert("User registered successfully");
          navigate("/login");
        } else {
          alert(res.data.message || "Signup failed");
        }
      })
      .catch((err) => {
        console.error("Signup error:", err);
        alert("Signup failed");
      });
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="signup-parent">
          <h3>Sign Up</h3>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name = "password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
