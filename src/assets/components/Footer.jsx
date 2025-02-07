import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white pt-32 pb-10 group  ">
      <i className="bi bi-flower1 text-3xl font-bold  size10 p-3 shadow-100 rounded-full"></i>
      <button
        onClick={() =>
          navigator.clipboard.writeText("miltonvinciline08@gmail.com")
        }
        className=" z-20 flex flex-col max-lg:h-40 max-lg:text-sm  cursor-pointer gap-10 max-lg:gap-5 justify-center items-center p-5  text-center w-full   "
      >
        <p className=" dark:text-white   transform transition-all duration-200 text-xl group-hover:text-3xl ">
          miltonvinciline08@gmail.com
        </p>
        <p className="opacity-0 group-hover:opacity-100 font-Squada text-2xl dark:text-white max-lg:text-lg">
          To copy it, click
        </p>
      </button>
    </div>
  );
};

export default Footer;
