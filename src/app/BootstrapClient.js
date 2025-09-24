"use client";
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap JS only in client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // This component doesn’t render anything
}
