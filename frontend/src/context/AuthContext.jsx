// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userNm, setUserNm] = useState(null);

  // 최초 로드 시 sessionStorage에서 user 복원
  useEffect(() => {
    const storedUser = localStorage.getItem("_mobi_userNm");
    if (storedUser) {
      setUserNm(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUserNm(userData);
    localStorage.setItem("_mobi_userNm", JSON.stringify(userData));
  };
  
  const logout = () => {
    setUserNm(null);
    localStorage.removeItem("_mobi_userNm");
  };

  return (
    <AuthContext.Provider value={{ userNm: userNm, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

// export
export default {
  AuthProvider,
  useAuth,
};
