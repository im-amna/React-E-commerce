import React from "react";
import Row from "../Row";

const HeroSection = () => {
  return (
    <div className="w-full px-[10%] py-[90px]">
      <Row className="w-full items-center justify-between">
        <div className="w-[46%]">
          <h1 className="text-[74px] text-slate-950 font-light">Collections</h1>
          <p className="text-[30px] text-black mt-[52px]">
            You can explore and shop many products different collections from
            various brands here.
          </p>

          <button className="h-[50px] w-[20%] text-white bg-black text-[20px] font-medium mt-[50px] ">
            Shop Now
          </button>
        </div>

        <div className="w-[46%]">
          <div className="w-[424px] h-[542px] relative">
            <img
              className=" animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px]"
              src="https://images.unsplash.com/photo-1718932441485-749b3f7ce6dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero"
            />
            <div className=" absolute animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040] top-[20px] left-[18px] -z-[1]" />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default HeroSection;
