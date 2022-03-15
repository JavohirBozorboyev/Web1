import React from "react";
import Image from "next/dist/client/image";
import Javohir2 from "../../../img/javs.png"


function About() {
  return (
    <div id="about" className="py-[65px]">
      <div className="container py-8 flex flex-col  items-center">
        <h1 className="text-gray-900 text-2xl md:text-3xl z-10 bg-white px-8 font-bold text-center border-2 border-black py-3 ">
          About Me
        </h1>
        <p className="w-full h-1 bg-black -mt-8"></p>
      </div>
      <div className="container py-12 flex flex-col md:flex-row">
        <div className="w-full p-2 md:w-6/12 flex flex-col items-start">
          <h2 className="text-emerald-300 text-2xl font-bold">About</h2>
          <p className="mt-4 lg:w-10/12 text-gray-500  border-2 p-2 border-emerald-300">
            I am Javohir Bozorboyev. I was born in 2002 in the town of Almaz,
            Chust, Namangan region, Uzbekistan. In 2019, I started studying at
            the Namangan Institute of Engineering Technologies as a Bachelor.
          </p>

          <p className="mt-4 lg:w-10/12 text-gray-500 border-2 p-2 border-emerald-300">
            Because of my interest in programming activities, in 2021 I started
            to increase my experience in the field of Web programming.
          </p>

          <a
            href="#about"
            className="mt-8 flex items-center shadow-x5 shadow-black bg-black text-emerald-400 font-serif border-2 border-black  text-xl font-bold p-2 px-4 duration-300 hover:bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#6EE7B7"
              className="mr-3 "
            >
              <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z" />
            </svg>
            Resume
          </a>
        </div>
        <div className="w-full md:w-6/12 flex justify-center mt-10 md:mt-0">
          <Image
            src={Javohir2}
            alt="Javohir Bozorboyev"
            objectFit="cover"
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
