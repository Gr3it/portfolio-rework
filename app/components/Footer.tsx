import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-black p-10 text-white flex items-center justify-center mt-auto"
      id="footer"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-10xl w-full gap-16">
        <div className="flex flex-col gap-2">
          <Image
            src="/logo.svg"
            className="select-none mb-2"
            width={50}
            height={50}
            alt="Logo"
          />
          <p className="text-base">
            Repository:{" "}
            <a
              className="text-base hover:underline"
              href="https://github.com/Gr3it/portfolio-rework"
              rel="noreferrer noopener"
              target="_blank"
            >
              Github
            </a>
          </p>
          <p className="text-base whitespace-break">
            Email:{" "}
            <a
              className="hover:underline"
              href="mailto:emanuele.zini11+work@gmail.com"
            >
              emanuele.zini11@gmail.com
            </a>
          </p>
          <p className="opacity-60 text-xs font-extralight mt-auto pt-2">
            2023 Created By Emanuele Zini
            <br />
            Content Writer Assistant: Martina Zini
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="opacity-50 font-bold uppercase">Personal Projects</h1>
          <Link
            href="/space-pirates"
            className="hover:underline underline-offset-2"
          >
            Space Pirates
          </Link>
          <Link
            href="/color-screentest"
            className="hover:underline underline-offset-2"
          >
            Color Screentest
          </Link>
          <Link
            href="/meta-empire"
            className="hover:underline underline-offset-2"
          >
            Meta Empire
          </Link>
          <Link
            href="/crypto-price-tracker"
            className="hover:underline underline-offset-2"
          >
            Crypto Price Tracker
          </Link>
          <Link
            href="/multichain-wallet-explorer"
            className="hover:underline underline-offset-2"
          >
            Multichain Wallet Explorer
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="opacity-50 font-bold uppercase">Academic Projects</h1>
          <Link href="/uni-park" className="hover:underline underline-offset-2">
            UNI-PARK
          </Link>
          <Link href="/plan-it" className="hover:underline underline-offset-2">
            Plan-it
          </Link>
          <Link
            href="/tum4world"
            className="hover:underline underline-offset-2"
          >
            Tum4World
          </Link>
          <Link
            href="/hotel-meano"
            className="hover:underline underline-offset-2"
          >
            Hotel Meano
          </Link>
          <Link href="/Flynet" className="hover:underline underline-offset-2">
            Flynet
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="opacity-50 font-bold uppercase">About Me</h1>
          <a
            className="hover:underline underline-offset-2"
            href="/Zini_Emanuele_English.pdf"
            download="Emanuele Zini CV"
          >
            Resume
          </a>
          <a
            className="hover:underline underline-offset-2"
            href="https://github.com/Gr3it"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:underline underline-offset-2"
            href="https://www.linkedin.com/in/emanuele-zini-b93474234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="hover:underline underline-offset-2"
            href="https://www.sololearn.com/profile/19666283"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoloLearn
          </a>
          <a
            className="hover:underline underline-offset-2"
            href="https://cssbattle.dev/player/emanuele_zini"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS-Battle
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
