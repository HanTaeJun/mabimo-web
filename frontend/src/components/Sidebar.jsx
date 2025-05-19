// Sidebar.js
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Auth from "../context/AuthContext";
import "./Sidebar.css";

function Sidebar() {
  const { useAuth } = Auth;
  const { userNm, logout } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { to: "/game-info", label: "정보" },
    { to: "/community", label: "커뮤니티" }
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "◀" : "▶"}
      </button>

      <div className="sidebar-logo">
        <Link to="/"><img src="/sheep.png" alt="로고" />{!collapsed && "HOME"}</Link>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={location.pathname.startsWith(item.to) ? "active" : ""}
          >
            {!collapsed && item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-auth">
        {userNm ? (
          <>
            {!collapsed && <span className="username">{userNm}</span>}
            <button className="logout-btn" onClick={logout}>로그아웃</button>
          </>
        ) : (
          <Link to="/login" className="login-link">{!collapsed && "로그인"}</Link>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
