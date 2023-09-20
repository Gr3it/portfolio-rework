import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "./Button";

const ProjectPreview = ({
  title = "",
  tags = "",
  date = "",
  url = "",
  img = "",
}) => {
  return (
    <div className="w-full flex odd:flex-row even:flex-row-reverse max-w-5xl">
      <div className="w-[37.5rem] h-[18.75rem] bg-white rounded-2xl flex overflow-hidden shadow-[0_0_12px_-4px_rgba(23,23,23,0.3)]">
        <div className="w-1/2 p-8 flex flex-col">
          <h3 className="text-4.5xl leading-tight font-semibold">{title}</h3>
          <p className="opacity-60 font-bold">{tags}</p>
          <Link
            href={url}
            className="group mt-auto  flex items-center gap-2 self-center"
          >
            <Button title="View Project" />
          </Link>
        </div>
        <div className="w-1/2 bg-light-blue flex items-center">
          <Image
            src={"/images/" + img}
            width={300}
            height={300}
            alt={title + " Project Preview Image"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
