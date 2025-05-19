import { Link } from "react-router-dom";
import Auth from "../context/AuthContext";
import "./Header.css";

function Header() {
  const { useAuth } = Auth;
  const { userNm, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/"><img src="/sheep.png" alt="" />HOME</Link>
      </div>
      <nav className="nav-links">
        <Link to="/game-info">정보</Link>
        <Link to="/community">커뮤니티</Link>
        
        {userNm ? (
          <div className="auth-area">
            <span className="username">{userNm}</span>
            <button className="logout-btn" onClick={logout}>로그아웃</button>
          </div>
        ) : (
          <Link to="/login" className="login-link">로그인</Link>
        )}

      </nav>
    </header>
  );
}


export default Header;
