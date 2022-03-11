import React from "react";

function Contact() {
  return (
    <div id="contact" className="bg-black py-12">
      <div className="container py-8 flex flex-col  items-center">
        <h1 className="text-white text-2xl md:text-3xl z-10 bg-black px-8 font-bold text-center border-2 border-white py-3 ">
          Contact Me
        </h1>
        <p className="w-full h-1 bg-white -mt-8"></p>
      </div>
      <div className="container py-4 pt-16 flex flex-wrap justify-around">
        <div className="w-10/12  sm:w-[48%]  md:w-[30%]  mt-4 flex flex-col  items-center bg-white  shadow-x5 rounded p-4">
          <p className="h-16 w-16 flex justify-center items-center text-white rounded-full bg-emerald-300 shadow-x5 shadow-emerald-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
          </p>
          <p className="text-emerald-300 mt-4 text-xl">Addres</p>
          <p className="text-gray-400 text-base mt-2">Namangan Uzbekistan</p>
          <p className="text-gray-400 text-base mt-2">Chust Olmos</p>
        </div>
        <div className="w-10/12 sm:w-[48%]  md:w-[30%] mt-4 flex flex-col  items-center bg-white  shadow-x5 rounded p-4">
          <a
            href="tel:+998993912505"
            className="h-16 w-16 flex justify-center items-center text-white rounded-full bg-emerald-300 shadow-x5 shadow-emerald-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
            </svg>
          </a>
          <p className="text-emerald-300 mt-4 text-xl">Phone Number</p>
          <p className="text-gray-400 text-base mt-2">+998 99 391 25 05</p>
        </div>
        <div className="w-10/12 sm:w-[48%]  md:w-[30%] mt-4 flex flex-col  items-center bg-white  shadow-x5 rounded p-4">
          <a
            href="https://myaccount.google.com/u/1/?hl=ru&utm_source=OGB&utm_medium=act"
            className="h-16 w-16 flex justify-center items-center text-white rounded-full bg-emerald-300 shadow-x5 shadow-emerald-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
            </svg>
          </a>
          <p className="text-emerald-300 mt-4 text-xl">Email</p>
          <a
            href="javokhirbozorboyev@gamil.com"
            className="text-gray-400 text-base mt-2 duration-300 hover:text-sky-400"
          >
            javokhirbozorboyev@gamil.com
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="container bg-white mt-12  shadow-lg">
          <div className=" py-6">
            <div className="text-center">
              <h1 className="font-normal text-3xl text-grey-darkest leading-loose my-3 w-full">
                Send me your account permission...
              </h1>
              <div className="w-full">
                <form className=" flex justify-center flex-col sm:flex-row items-center">
                  <input
                    type="email"
                    placeholder="Email..."
                    className="mr-2 bg-black py-2 px-4 text-xl border-2 outline-none border-black text-white  "
                  />
                  <button
                    type="submit"
                    className=" text-emerald-400 bg-black mt-2  sm:mt-0 text-xl font-bold px-4 py-2 border-2 border-black  duration-300 hover:bg-transparent "
                  >
                    Get started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
