import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../img/logo.png";

const Links = [
  {
    id: 1,
    name: "Home",
    href: "#header",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Skills",
    href: "#skill",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [MenuOpen, setMenuOpen] = React.useState(false);
  const MenuHandler = () => setMenuOpen(!MenuOpen);
  return (
    <div className="bg-black fixed w-full z-[1000]">
      <nav className="container   relative  py-3  rounded-md flex items-center justify-between">
        <div className=" w-full md:w-6/12  flex items-center justify-between">
          <div className="flex">
            <Link href="/">
              <a className="text-xl font-serif text-emerald-400 ">
                {" "}
                &#10096; JAVOKHIR &#10097;
              </a>
            </Link>
          </div>
          <div
            className=" flex flex-col  items-end  md:hidden"
            onClick={MenuHandler}
          >
            <p
              className={
                MenuOpen
                  ? "w-[25px] duration-300  my-[4px] h-[2px] bg-emerald-300 rotate-45"
                  : "w-[16px] duration-300 my-[4px] h-[2px] bg-emerald-300"
              }
            ></p>
            <p
              className={
                MenuOpen
                  ? "w-[25px] duration-300 my-[4px] h-[2px] bg-emerald-300 -rotate-45"
                  : "w-[25px] duration-300 my-[4px] h-[2px] bg-emerald-300"
              }
            ></p>
          </div>
        </div>
        <div
          className={
            MenuOpen
              ? "absolute bg-black left-0 right-0 top-[52px] shadow-x4 md:shadow-none  border-emerald-300 flex flex-col items-center p-2 py-6 md:relative md:flex-row md:top-0 md:p-0 md:bg-transparent overflow-y-auto"
              : "hidden md:flex"
          }
        >
          {Links.map((link) => {
            return (
              <a
                onClick={MenuHandler}
                key={link.id}
                href={link.href}
                className=" cursor-pointer font-serif text-gray-500  font-bold duration-300 my-2  md:ml-8 hover:text-emerald-300 "
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
