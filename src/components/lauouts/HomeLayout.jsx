import React from "react";
import { Outlet } from "react-router";
import Nav from "../common/nav/Nav";

export default function HomeLayout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
