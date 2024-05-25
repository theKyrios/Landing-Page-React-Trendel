import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => (
  <header className="flex justify-between self-stretch w-full text-center max-md:flex-wrap max-md:max-w-full">
    <Logo />
    <nav className="flex gap-5 text-md leading-8 max-md:flex-wrap max-md:max-w-full">
     {/*  <NavLink href="#" className="flex-auto my-auto text-black border-b-[1px] border-fuchsia-800">
        Home
      </NavLink>
      <NavLink href="#" className="flex-auto my-auto text-gray-600 hover:text-black focus:text-black">
        About Us
      </NavLink>
      <NavLink href="#" className="flex-auto my-auto text-gray-600 hover:text-black focus:text-black">
        Contact
      </NavLink>
*/}
     {/* <Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#861890_0%,#fa9812_50%,#861890_100%)]" />
        <span className="inline-flex text-fuchsia-800 h-full w-full cursor-pointer items-center justify-center rounded-full bg-stone-50 px-3 py-1 text-sm font-medium backdrop-blur-3xl">
        Download App
        </span>
      </Button>
*/}

<Button className="button1"><span>Download</span></Button>
    </nav>
  </header>
);

export default Header;
