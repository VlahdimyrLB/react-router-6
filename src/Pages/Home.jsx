import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      {/* Link tag
      change a tag to Link
      only needs one prop
      to - where this link will go
      same name as the path*/}
      <Link to="/About">About</Link>
    </div>
  );
};

export default Home;
