import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoRss } from "react-icons/io5";

export function MainView() {
  return (
    <div className=" mainview__width  flex items-center">
      <div className="Home_container__Ennsq container ">
        <div className="md:flex md:justify-between">
          <div >
            <h1 className="mmd:text-2xl text-4xl text-white  font-bold">Shimabu IT University</h1>
            <p className="text-white text-base font-bold"> しまぶーのポートフォリオのためのページです</p>
          </div>
          <div className="mmd:mt-8 flex  items-center">
            <AiOutlineTwitter size="25px" color="white" className="mr-3"/>
            <MdOutlineFacebook size="25px" color="white" className="mr-3"/>
            <IoLogoRss size="25px" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
