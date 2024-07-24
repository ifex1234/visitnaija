import { NAV_LINKS } from "../constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import user from "../../public/user.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-around w-full z-30 py-5 sticky top-0 text-slate-700  bg-slate-50">
      <Link href="/">
        <h1 className=" text-green-700 text-2xl font-semibold">Visit9ja</h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex text-slate-700">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-slate-700  cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:inline-block">
        <Button className=" rounded-3xl flex justify-around items-center w-32 hover:bg-lime-200 hover:text-black">
          Login <Image src={user} alt="" />
        </Button>
      </div>

      <span className="flex justify-between gap-3">
        <Button>switch</Button>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </span>
    </nav>
  );
};

export default Navbar;
