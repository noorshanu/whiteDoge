import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
        <h2 className="font-groot-one text-5xl my-2 text-[#000000] text-center font-bold relative z-30">
          About Us
        </h2>
        <img
          src="images/bran.png"
          alt=""
          className=" mx-auto h-[100px] -mt-12 relative z-10"
        />

        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" w-full sm:w-[500px]">
            {/* <RoadmapCards /> */}
            <img
              src="images/img1.jpg"
              alt=""
              className=" rounded-3xl shadow-lg"
            />
          </div>
          <div className=" max-w-xl">
            <p className="font-semibold font-groot-one text-xl sm:text-3xl text-black  py-2">
            Welcome to GABE on Solana!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one text-black  font-medium">
            Meet GABE, the legendary dog meme coin on Solana! With a bark louder than a rocket launch and a sense of humor that's infectious, GABE brings energy, fun, and serious gains to the table. Our community is as wild and enthusiastic as the coin itself, making every moment a celebration.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-black font-medium">
            In a race against time, $GABE is your go-to for grabbing that special GEM for your moon bag
            </h1>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
