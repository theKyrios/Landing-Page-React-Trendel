import React from "react";

const NavLink = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export default NavLink;
