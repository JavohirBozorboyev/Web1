import React from "react";
import Image from "next/image";
import Javohir from "../../../img/Ja.png";

function Header() {
  return (
    <div id="header" className="bg-black pt-10 pb-12 overflow-hidden">
      <div className="container py-8 relative flex items-center min-h-[90vh] flex-col md:flex-row   rounded-md">
        <div className="w-full md:w-6/12 flex relative justify-center items-center ">
          <Image
            src={Javohir}
            height={1000}
            width={1000}
            objectFit="cover"
            className=" rounded-full"
            alt="Javokhir Bozorboyev"
          />
        </div>
        <div className="w-full md:w-6/12 mt-4 p-4 md:mt-0 flex flex-col items-center md:items-start">
          <p className="text-gray-300 text-2xl lg:text-3xl text-center md:text-left">
            Hello I am
          </p>
          <h1 className="text-3xl md:text-4xl mt-4 lg:text-6xl text-white text-center md:text-left font-serif">
            Javokhir Bozorboyev
          </h1>
          <p className=" text-2xl text-emerald-300 mt-4 text-center md:text-left lg:text-3xl">
            Frontend Developer
          </p>
        </div>
        <div className="flex md:flex-col mt-12 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=100072615049990"
            className="px-3 md:py-4 block duration-300  hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="JOZq0V4XPxMzNaLCE5XPGa_44003_gr1"
                x1="37.646"
                x2="37.646"
                y1="14.5"
                y2="56.878"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#JOZq0V4XPxMzNaLCE5XPGa_44003_gr1)"
                d="M42,56V38h5.358l0.934-8H42v-4.457c0-2.097-0.131-3.527,2.877-3.527L48,22.014v-6.479 c-1-0.088-2.487-0.285-5.136-0.285c-5.531,0-8.864,3.376-8.864,9.576V30h-7v8h7v18H42z"
              ></path>
              <linearGradient
                id="JOZq0V4XPxMzNaLCE5XPGb_44003_gr2"
                x1="32"
                x2="32"
                y1="6.833"
                y2="58.017"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#JOZq0V4XPxMzNaLCE5XPGb_44003_gr2)"
                d="M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/javokhir_bozorboyev/"
            className=" px-3 md:py-4 block duration-300  hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="jm_nAfYbxsVmTlYr5N4x9a_43625_gr1"
                x1="32"
                x2="32"
                y1="6.667"
                y2="57.872"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#jm_nAfYbxsVmTlYr5N4x9a_43625_gr1)"
                d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"
              ></path>
              <linearGradient
                id="jm_nAfYbxsVmTlYr5N4x9b_43625_gr2"
                x1="32"
                x2="32"
                y1="18.167"
                y2="45.679"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#jm_nAfYbxsVmTlYr5N4x9b_43625_gr2)"
                d="M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z"
              ></path>
              <linearGradient
                id="jm_nAfYbxsVmTlYr5N4x9c_43625_gr3"
                x1="46"
                x2="46"
                y1="12.75"
                y2="23.049"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#jm_nAfYbxsVmTlYr5N4x9c_43625_gr3)"
                d="M46 15A3 3 0 1 0 46 21A3 3 0 1 0 46 15Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/JavohirBozorboyev"
            className=" px-3 md:py-4 block duration-300  hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1"
                x1="30.999"
                x2="30.999"
                y1="16"
                y2="55.342"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)"
                d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"
              ></path>
              <linearGradient
                id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2"
                x1="32"
                x2="32"
                y1="5"
                y2="59.167"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)"
                d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/javohir-bozorboyev-9715a1234/"
            className="px-3 md:py-4 block duration-300  hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="SUJNhpmDQDF27Y3OfwgfYa_44019_gr1"
                x1="19"
                x2="19"
                y1="24.858"
                y2="49.041"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#SUJNhpmDQDF27Y3OfwgfYa_44019_gr1)"
                fillRule="evenodd"
                d="M22 48L22 26 16 26 16 48 22 48z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="SUJNhpmDQDF27Y3OfwgfYb_44019_gr2"
                x1="19.382"
                x2="19.382"
                y1="15.423"
                y2="23.341"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#SUJNhpmDQDF27Y3OfwgfYb_44019_gr2)"
                fillRule="evenodd"
                d="M19.358,23c2.512,0,4.076-1.474,4.076-3.554 c-0.047-2.126-1.564-3.649-4.028-3.649c-2.465,0-4.076,1.475-4.076,3.601c0,2.08,1.563,3.602,3.981,3.602H19.358L19.358,23z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="SUJNhpmDQDF27Y3OfwgfYc_44019_gr3"
                x1="37.386"
                x2="37.386"
                y1="14.125"
                y2="49.525"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#SUJNhpmDQDF27Y3OfwgfYc_44019_gr3)"
                fillRule="evenodd"
                d="M26.946,48H34V35.911c0-0.648,0.122-1.295,0.313-1.758 c0.52-1.295,1.877-2.635,3.867-2.635c2.607,0,3.821,1.988,3.821,4.901V48h6V35.588c0-6.657-3.085-9.498-7.826-9.498 c-3.886,0-5.124,1.91-6.072,3.91H34v-4h-7.054c0.095,2-0.175,22-0.175,22H26.946z"
                clipRule="evenodd"
              ></path>
              <linearGradient
                id="SUJNhpmDQDF27Y3OfwgfYd_44019_gr4"
                x1="32"
                x2="32"
                y1="6.5"
                y2="57.5"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#SUJNhpmDQDF27Y3OfwgfYd_44019_gr4)"
                d="M50,57H14c-3.859,0-7-3.141-7-7V14c0-3.859,3.141-7,7-7h36c3.859,0,7,3.141,7,7v36 C57,53.859,53.859,57,50,57z M14,9c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14c0-2.757-2.243-5-5-5H14z"
              ></path>
            </svg>
          </a>
          <a
            href="https://t.me/Javohir_B_dev"
            className="px-3 md:py-4 block duration-300  hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 64 64"
            >
              <linearGradient
                id="EEzBmxT86u8E~6vCqQtLma_114954_gr1"
                x1="29.5"
                x2="29.5"
                y1="19.006"
                y2="46"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#6dc7ff"></stop>
                <stop offset="1" stopColor="#e6abff"></stop>
              </linearGradient>
              <path
                fill="url(#EEzBmxT86u8E~6vCqQtLma_114954_gr1)"
                d="M22.007,35.25L39.022,25L27.011,37.5l10.535,8.275c1.887,0.83,2.574-0.899,2.574-0.899 l4.825-24.501c0,0,0.082-0.625,0.045-0.75c-0.344-1.168-2.228-0.325-2.227-0.324L15.206,30.188c0,0-1.304,0.449-1.201,1.278 c0.103,0.83,1.167,1.209,1.167,1.209l6.837,2.575"
              ></path>
              <linearGradient
                id="EEzBmxT86u8E~6vCqQtLmb_114954_gr2"
                x1="29.5"
                x2="29.5"
                y1="5.833"
                y2="58.262"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#EEzBmxT86u8E~6vCqQtLmb_114954_gr2)"
                d="M45.949,19.343c-0.23-0.784-0.859-1.269-1.727-1.33c-0.175-0.013-1.159,0.027-1.823,0.365 l-0.003-0.007L14.881,29.243C13.996,29.547,13.02,30.266,13,31.33c-0.002,0.084,0.003,0.171,0.014,0.26 c0.173,1.4,1.654,1.968,1.807,2.021l6.377,2.402c0.49,1.575,2.108,6.774,2.456,7.886c0.234,0.744,0.62,1.709,1.327,1.973 C25.185,45.956,25.402,46,25.628,46c0.614,0,1.014-0.312,1.163-0.447l3.903-3.89l6.235,4.897c0.065,0.052,0.138,0.096,0.215,0.129 c0.517,0.228,0.976,0.31,1.367,0.31c0.409,0,0.745-0.089,0.998-0.193c1.067-0.438,1.494-1.447,1.54-1.561 c0.022-0.057,0.04-0.116,0.052-0.176l4.835-24.564C46.047,19.669,45.987,19.472,45.949,19.343z M23.195,35.701l9.872-5.947 l-6.775,7.053c-0.12,0.124-0.188,0.279-0.229,0.442c-0.003,0.012-1.006,4.43-1.006,4.43L23.195,35.701z M43.963,20.188l-4.799,24.37 c-0.057,0.098-0.2,0.311-0.413,0.398c-0.179,0.073-0.412,0.055-0.694-0.053l-9.559-7.507l11.245-11.704 c0.348-0.361,0.374-0.925,0.061-1.316c-0.312-0.391-0.867-0.491-1.297-0.232l-16.601,10l-6.389-2.406 c-0.196-0.075-0.398-0.221-0.481-0.323c0.109-0.096,0.329-0.221,0.537-0.296L43.131,20.23c0.017-0.006,0.033-0.014,0.05-0.021 c0.251-0.11,0.59-0.192,0.803-0.205C43.974,20.104,43.963,20.187,43.963,20.188z"
              ></path>
              <linearGradient
                id="EEzBmxT86u8E~6vCqQtLmc_114954_gr3"
                x1="32"
                x2="32"
                y1="5.833"
                y2="58.262"
                gradientUnits="userSpaceOnUse"
                spreadMethod="reflect"
              >
                <stop offset="0" stopColor="#1a6dff"></stop>
                <stop offset="1" stopColor="#c822ff"></stop>
              </linearGradient>
              <path
                fill="url(#EEzBmxT86u8E~6vCqQtLmc_114954_gr3)"
                d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
              ></path>
            </svg>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
