import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/conversations">Conversations</NavLink>
        </li>
        <li>
          <NavLink to="/messages">Messages</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;