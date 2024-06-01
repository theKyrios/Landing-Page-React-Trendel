import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Button from "./Button";
import NavLink from "./NavLink";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); 
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "whytrendel", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.clientHeight > scrollPosition) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex px-12 max-md:px-5 w-full overflow-x-hidden gap-5 py-2 justify-between items-center self-stretch w-full text-center max-md:flex-wrap max-md:max-w-full">
      <Logo />
      <nav className="flex gap-5 text-md leading-8 max-md:flex-wrap max-md:max-w-full">
        <div className="desktop-menu hidden md:flex gap-5 leading-8 max-md:flex-wrap max-md:max-w-full">
          <NavLink
            href="#home"
            className={`flex-auto my-auto ${activeLink === "home" ? "border-b-[1px] border-fuchsia-800 text-black" : "text-gray-600 hover:text-black focus:text-black"}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </NavLink>
          <NavLink
            href="#whytrendel"
            className={`flex-auto my-auto ${activeLink === "whytrendel" ? "border-b-[1px] border-fuchsia-800 text-black" : "text-gray-600 hover:text-black focus:text-black"}`}
            onClick={() => handleLinkClick("whytrendel")}
          >
            Why Trendel?
          </NavLink>
          <NavLink
            href="#contact"
            className={`flex-auto my-auto ${activeLink === "contact" ? "border-b-[1px] border-fuchsia-800 text-black" : "text-gray-600 hover:text-black focus:text-black"}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </NavLink>
        </div>
        <Button className="button1 text-[0.7rem] md:text-[1rem]"><span>Download</span></Button>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className={`md:hidden fixed top-0 left-0 w-full h-1/2 overflow-hidden transform ${menuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out`}>
        <div className="m-2 border border-fuchsia-800 bg-stone-50 shadow  rounded-md">
        <div className="flex justify-between items-center py-5 px-2 border-b-[1px] fuchsia-800">
          <Logo />
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col max-w-[100%] text-md leading-8 pb-4 bg-[#931d9d0f]">
          <NavLink
            href="#home"
            className={`flex-auto my-auto w-full text-left pl-2 py-2 ${activeLink === "home" ? " bg-[#931d9d] text-white" : "bg-[#931d9d0f] text-black"}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </NavLink>
          <NavLink
            href="#whytrendel"
            className={`flex-auto my-auto w-full text-left pl-2 py-2 ${activeLink === "whytrendel" ? "bg-[#931d9d] text-white" : "bg-[#931d9d0f] text-black"}`}
            onClick={() => handleLinkClick("whytrendel")}
          >
            Why Trendel?
          </NavLink>
          <NavLink
            href="#contact"
            className={`flex-auto my-auto w-full text-left pl-2 py-2 ${activeLink === "contact" ? "bg-[#931d9d] text-white" : "bg-[#931d9d0f] text-black"}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </NavLink>
        </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
