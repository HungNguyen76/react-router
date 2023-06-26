import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>This is About Page </h2>
      <Outlet />
    </div>
  );
}
