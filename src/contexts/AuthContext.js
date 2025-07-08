import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const userMap = {
  "mor_2314": 1,
  "johnd": 2,
  "donero": 3,
  "david_r": 4,
  "miriam": 5,
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    const storedToken = localStorage.getItem("token");
    const storedId = localStorage.getItem("userId");
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
      setUserId(parseInt(storedId));
    }
  }, []);

  const login = (username, token) => {
    const id = userMap[username];
    setUser(username);
    setToken(token);
    setUserId(id);
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", id);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setUserId(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;