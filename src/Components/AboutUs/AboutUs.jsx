import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#F4F4F4] mt-6">
      <img className="pl-8 pt-5" src="../../../images/Vector.png" alt="" />
      <div className="flex max-w-[1048px] mx-auto gap-5">
        <div>
          <div className="flex flex-col gap-6 mt-3">
            <button className="text-[#494949] font-bold w-fit bg-white flex gap-2 items-center px-3 py-1 rounded-full">
              <img src="../../../images/Group 1 (1).png" alt="" />
              <span>About Us</span>
            </button>
            <h1 className="font-bold text-4xl text-[#212121] max-w-[477px]">
              We design thoughtful, liveable spaces
            </h1>
            <p className="max-w-[559px]">
              The barn house captivates with its blend of rustic charm and
              modern sophistication, featuring weathered wood, sleek metal
              accents.
            </p>
            <div className="bg-[#FFF] flex gap-3 p-3 rounded-lg">
              <figure>
                <img src="../../../images/commercial.png" alt="" />
              </figure>
              <div>
                <h3 className="text-[#494949] font-extrabold text-xl">
                  Commercial
                </h3>
                <p className="text-[#737373] font-medium">
                  The barn house captivates with its blend of rustic charm and
                  modern.
                </p>
              </div>
            </div>
            <div className="bg-[#FFF] flex gap-3 p-3 rounded-lg">
              <figure>
                <img src="../../../images/residential.png" alt="" />
              </figure>
              <div>
                <h3 className="text-[#494949] font-extrabold text-xl">
                  Residential
                </h3>
                <p className="text-[#737373] font-medium">
                  The barn house captivates with its blend of rustic charm and
                  modern.
                </p>
              </div>
            </div>
          </div>
        </div>
        <figure>
          <img src="../../../images/Rectangle.png" alt="" />
        </figure>
      </div>
      <div className="bg-[#FFF]">
        <div>
          <img src="../../../images/departement.jpg" alt="" />
          <h3 className="text-#[494949] font-extrabold">235+</h3>
          <h4 className="text-[#737373]">Happy Client Review</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
