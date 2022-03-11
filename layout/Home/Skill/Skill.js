import React from "react";

const Skills = [
  {
    id: 1,
    name: "Html",
    fo: 80,
  },
  {
    id: 2,
    name: "Css",
    fo: 80,
  },
  {
    id: 3,
    name: "Tailwind Css",
    fo: 70,
  },
  {
    id: 4,
    name: "Javascript",
    fo: 70,
  },
  {
    id: 5,
    name: "React.js",
    fo: 60,
  },
  {
    id: 6,
    name: "Next.js",
    fo: 70,
  },
  {
    id: 7,
    name: "Git and Github",
    fo: 60,
  },
];

function Skill() {
  return (
    <div id="skill" className="  bg-black py-12">
      <div className="container py-8 flex flex-col   items-center">
        <h1 className="text-white text-2xl md:text-3xl z-10 bg-black px-8 font-bold text-center border-2 border-white py-3 ">
          Skills Me
        </h1>
        <p className="w-full h-1 bg-white -mt-8"></p>
      </div>

      <div className="container py-8 flex flex-col items-center md:flex-row">
        <div className="w-full md:w-6/12 p-2 py-20 flex justify-center relative z-20 overflow-hidden">
          <div className="text-gray-700 -rotate-1 p-4 z-20 lg:w-8/12 rounded-md bg-white shadow-white shadow-x5">
            <h1 className=" text-xl mb-4 text-emerald-300 font-bold font-serif">Frontend Developer</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
              dolore explicabo aspernatur at veniam ipsum ab corrupti voluptatum
              aliquam est cupiditate, debitis ratione sequi consequatur.
              Ducimus, earum vitae! Recusandae, omnis?
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              aliquam facere perspiciatis reiciendis illum. Ad magni perferendis
              facilis, quis saepe animi, rem culpa rerum perspiciatis facere
              optio modi reiciendis asperiores.
            </p>
          </div>
          <div className="absolute left-[10%] right-[15%] rounded-md rotate-6 top-[10%] bottom-[10%] shadow-x5 shadow-emerald-300 bg-emerald-300 -z-10"></div>
        </div>
        <div className="w-full md:w-6/12 p-2">
          {Skills.map((item) => {
            return (
              <div key={item.id} className="my-6">
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-xl">{item.name}</h1>
                  <p className="text-white text-xl">{item.fo}%</p>
                </div>
                <div className="mt-1 overflow-hidden py-1">
                  <p className="w-full h-2 rounded-md bg-white"></p>
                  <p
                    style={{ width: `${item.fo + "%"}` }}
                    className="-mt-[6px]  h-1 rounded-md bg-emerald-400"
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skill;
