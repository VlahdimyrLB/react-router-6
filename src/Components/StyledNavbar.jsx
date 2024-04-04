import { NavLink } from "react-router-dom";
import "../index.css";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        // style approach
        // style={({ isActive }) => {
        //   return { color: isActive ? "red" : "gray" };
        // }}

        //className Approach
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/Products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="/Login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
