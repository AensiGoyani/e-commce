import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      setToken(data.token);
      setError("");
    } catch (err) {
      setError(err.message);
      setToken("");
    }
  };

  return (
    <div className="container mx-auto">
      <div className=" max-w-md mx-auto mt-32 mb-7  border border-gray-500 py-9 px-9 rounded-2xl">
        <h2 className="text-2xl font-bold  text-center mb-5">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-400 rounded-2xl p-4 "
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-2xl p-4 "
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-4 rounded-xl"
          >
            Login
          </button>
        </form>
        {token && (
          <div className="mt-4 text-green-600 ">
            <strong>Token:</strong> {token}
          </div>
        )}
        {error && <div className="mt-4 text-red-600">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
