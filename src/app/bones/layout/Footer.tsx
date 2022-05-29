import React from "react";
import { Logo } from "./Header.styles";

const Footer = () => {
  return (
    <>
      <div className="bg-white h-[300px] " />
      <div className="border h-[300px] pt-20 pb-10">
        <div className="flex items-center justify-center">
          <div className="mr-5 flex flex-col items-center ">
            <Logo />
            <p className="text-gray-100 font-bold">
              The force is strong with this one
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
