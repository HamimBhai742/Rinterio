import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["A barn house of this design has a striking appearance"],
    loop: 0,
  });
  return (
    <div className="w-[95%] mx-auto">
      <figure className="">
        <img className="mx-auto" src="../../../images/banner.png" alt="" />
      </figure>
      <div className="">
        <div>
          <h3 className="text-[#212121] font-extrabold text-6xl max-w-[1048px] mx-auto text-center leading-[72px]">
            {text}
          </h3>
          <p className="text-[#494949] font-medium max-w-[972px] mx-auto text-center mt-6">
            The barn house captivates with its blend of rustic charm and modern
            sophistication, featuring weathered wood, sleek metal accents, and
            large windows that flood the space with natural light.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="flex bg-[#ABEF5F80] text-xl font-semibold px-3 py-2 rounded-full gap-2">
            View Details
            <span className="bg-[#ABEF5F] p-2 rounded-full">
              <img src="../../../images/Group 1.png" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
