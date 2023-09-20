import Link from "next/link";
import React from "react";

const Button = ({ title = "" }) => {
  return (
    <div className="cursor-pointer font-semibold text-sm uppercase py-3 px-8 bg-blue text-white rounded-xl hover:shadow-[0_1px_25px_0px_rgba(0,0,0,0)] hover:shadow-blue/50 transition-transform duration-100 ease-in">
      {title}
    </div>
  );
};

export default Button;
