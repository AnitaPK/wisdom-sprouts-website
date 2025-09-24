"use client";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Sidebar from "@/components/adminDashboard/Sidebar";
import DashboardContent from "@/components/adminDashboard/DashboardContent";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/admin/login";
    } else {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          window.location.href = "/admin/login";
        } else {
          setUser(decoded);
        }
      } catch (err) {
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
      }
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <Sidebar />
        <DashboardContent user={user} />
      </div>
    </div>
  );
}
