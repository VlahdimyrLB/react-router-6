import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import StyledNavbar from "../Components/StyledNavbar";

const SharedLayout = () => {
  return (
    <div>
      {/* <h2>Home</h2> */}
      {/* Link tag
      change a tag to Link
      only needs one prop
      to - where this link will go
      same name as the path
      <Link to="/About">About</Link> */}
      <StyledNavbar />
      <Outlet />
      {/* <section className="section"> */}
      {/* <Outlet /> */}
      {/* </section> */}
    </div>
  );
};

export default SharedLayout;
