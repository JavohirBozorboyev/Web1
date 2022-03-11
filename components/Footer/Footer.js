import React from "react";

const Links = [
  {
    id: 2,
    name: "Github",
    url: "https://github.com/JavohirBozorboyev",
  },
  {
    id: 3,
    name: "Linkedin",
    url: "",
  },
  {
    id: 4,
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100072615049990",
  },
  {
    id: 5,
    name: "Instagram",
    url: "https://www.instagram.com/javokhir_bozorboyev/",
  },
];

function Footer() {
  return (
    <div className="bg-black border-t-2">
      <div className="container py-10 flex flex-col  justify-around items-start md:items-center md:flex-row">
        <div>
          <a href="#header" className=" px-4 text-xl text-gray-400">
            Javokhir Bozorboyev
          </a>
        </div>
        <div></div>
        <div className="flex flex-col md:flex-row px-4 py-2">
          {Links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.url}
                className="text-gray-500 font-serif py-2 md:py-0 md:px-2 duration-300 hover:text-white"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
