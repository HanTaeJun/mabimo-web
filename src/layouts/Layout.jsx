// src/layouts/Layout.jsx
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;
