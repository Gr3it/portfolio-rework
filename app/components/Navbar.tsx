import Image from "next/image";
import React from "react";
import NavbarLink from "./NavbarLink";
import CTA from "./CTA";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex items-center justify-center px-10 py-5 select-none absolute">
      <div className="flex max-w-10xl w-full gap-16 items-center">
        <svg
          className="w-12 mr-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <rect width="100" height="100" rx="6" fill="#0d6ede" />
          <g>
            <path
              d="M43.19,57.93v8.21h9.89v7.62H43.19v8.92H57.92v7.93H33.46V50H57.92v7.91Z"
              fill="#fff"
            />
            <path
              d="M73.82,82.47H90.7v8.14H63V83L79.74,58.1H63V50H90.7v7.42Z"
              fill="#fff"
            />
          </g>
        </svg>
        <NavbarLink key="projects" name="My Projects" target="projects" />
        <NavbarLink key="about" name="About Me" target="about" />
        <div className="ml-auto">
          <CTA />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
