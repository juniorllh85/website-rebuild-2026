import React from "react";
import SahiraLanding from "./components/SahiraLanding";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') : '/';
  if (path === '/admin/login') return <AdminLogin />;
  if (path === '/admin') return <AdminPanel />;
  return <SahiraLanding />;
}
