import React from "react";

const NavbarLink = ({ name = "", target = "" }) => {
  return (
    <div className="font-medium text-lg flex flex-col items-center p-2">
      <a className="z-10 peer cursor-pointer" href={"#" + target}>
        {name}
      </a>
      <svg
        className="peer-hover:opacity-100 peer-hover:translate-y-5 absolute w-24 translate-y-7 transition-all duration-200 ease-in opacity-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 143 25.22"
      >
        <path
          d="M5,26.11S117.74-17.13,145,17"
          transform="translate(-3.5 -2.39)"
          fill="none"
          stroke="#0d6ede"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default NavbarLink;
