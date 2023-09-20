import Image from "next/image";
import React from "react";

const InterestCard = ({ title = "", content = "", img = "" }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        className="drop-shadow-[0_1px_4px_rgba(148,212,240,1)]"
        src={"/Images/Icon/" + img}
        width={172}
        height={172}
        alt={title + " Image"}
      />
      <h4 className="text-3xl font-medium">{title}</h4>
      <p className="text-lg text-justify font-light opacity-60">{content}</p>
    </div>
  );
};

export default InterestCard;
