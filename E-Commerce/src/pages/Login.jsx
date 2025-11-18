import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials:"include",
        body: JSON.stringify(formData),

      });
      const data = await res.json();
      setMessage(data.msg);
      if(res.ok){
        setMessage("Successfully Signup");
        navigate("/Product");
        
    }
    else{
      setMessage(data.msg);
    }

    } catch (error) {
      console.error(error);
      setMessage("Error connecting to server");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
