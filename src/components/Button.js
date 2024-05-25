import React from "react";

const Button = ({ children, className, onClick, type = "button" }) => (
  <button className={className} onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
