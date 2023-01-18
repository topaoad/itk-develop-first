import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoRss } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";

export function MainView() {
  return (
    <div className=" mainview__width  flex items-center">
      <div className="Home_container__Ennsq container ">
        <div className="md:flex md:justify-between">
          <div>
            <h1 className="mmd:text-2xl text-4xl text-white  font-bold">
              Welcome To My Site
            </h1>
            <p className="text-white text-base font-bold">
             
              フロントエンドエンジニア関連のポートフォリオ兼技術検証用ページです
            </p>
          </div>
          <div className="mmd:mt-8 flex  items-center">
            <AiOutlineTwitter size="25px" color="white" className="mr-3" />
            <MdOutlineFacebook size="25px" color="white" className="mr-3" />
            <IoLogoRss size="25px" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
