import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "mor_2314", password: "83r5^_" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        login(formData.username, data.token);
        navigate("/"); 
      } else {
        setError("Invalid credentials.");
      }
    } catch {
      setError("Login failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form onSubmit={handleSubmit} className="bg-white border-gray-500 border p-8 rounded-lg shadow w-[300px]">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded border-gray-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded border-gray-500"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">
          Login
        </button>
        {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
