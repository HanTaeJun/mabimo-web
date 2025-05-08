// src/components/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../context/AuthContext";
import "./LoginForm.css";

function LoginForm() {
  const { useAuth } = Auth;
  const { login } = useAuth();
  const [usernm, setUsernm] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 실제 로그인 인증 처리
    if (usernm && password) {
      console.log("로그인 시도:", usernm, password);
      login(usernm);
      navigate("/"); // 로그인 성공 시 홈으로 이동
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        아이디
        <input
          type="text"
          value={usernm}
          onChange={(e) => setUsernm(e.target.value)}
          required
        />
      </label>
      <label>
        비밀번호
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;
