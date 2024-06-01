import React from "react";
import logo from "../assets/logo.png";

const Logo = () => (
  <div className="flex text-3xl items-center h-full leading-8 text-fuchsia-800 whitespace-nowrap font-[590]">
   <a href="/"> <img loading="lazy" src={logo} className="h-[30px]" alt="Logo" /></a>
  </div>
);

export default Logo;
