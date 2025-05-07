// ✅ 리팩토링된 src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (usernm) => setUser({ usernm });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

// ✅ export는 객체 하나로 통합 (HMR 안정적)
export default {
  AuthProvider,
  useAuth,
};
