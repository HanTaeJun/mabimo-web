// src/layouts/Layout.jsx
// import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content" style={{ padding: "1rem" }}>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
