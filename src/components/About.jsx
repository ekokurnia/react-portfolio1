import React from "react";
import Button from "./Button";
import Testi from "./Testi";

const About = () => {
  return (
    <div className="pt-9">
      <div className="flex flex-col xl:flex-row xl:justify-between space-y-8">
        <div className="flex justify-between items-center ">
          <h1 className="text-[2rem] font-light leading-[120%] md:text-[4.5rem] md:leading-[102%]">
            It's Me
            <div className="avatar hidden md:inline-block ml-3 translate-y-2">
              <div className="w-[4rem] rounded-full">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
              </div>
            </div>
            <br />
            Eko Kurniawan
          </h1>
          <div className="avatar md:hidden">
            <div className="w-[3.5rem] rounded-full">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" />
            </div>
          </div>
        </div>
        <p className="text-base font-inter md:max-w-[526px]">
          I like to code and keep it simple, try something new, and learn more. I think sharing knowledge is the best practice to improve my skills, and I try to do it.
          <br />
          <br />I am currently the Chief Technology Officer at Society, a startup to help students prepare for their exams.
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row md:justify-center items-center md:flex-wrap gap-8 mt-24">
        <Testi />
        <Testi />
        <Testi />
        <Testi />
        <Testi />
        <Testi />
        <div className="absolute bottom-0 w-full h-[158px] bg-gradient-to-b to-white from-white/0"></div>
      </div>
    </div>
  );
};

export default About;
