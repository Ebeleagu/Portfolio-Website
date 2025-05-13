// import React from 'react';
import Pic from "/zave.png";

const First = () => {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row justify-around bg-[whitesmoke] p-5">
      <div className="flex flex-col justify-center items-center gap-5 h-[80vh] font-[times-new-roman] text-center w-full md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-[cursive]">I'm Charles Vincent.</h1>
        <h2 className="text-lg md:text-xl">
          I'm a Web Developer based in Nigeria, check me out!
        </h2>
        <button className="bg-[#297B67] p-3 rounded-full text-white w-[60%] md:w-[8vw] transition-transform transform hover:scale-105 hover:bg-[#1f5e54]">
          Portfolio
        </button>
      </div>
      <div className="flex justify-center mt-5 md:mt-0 md:w-1/2">
        <img
          src={Pic}
          alt="David Ben, A Web Developer based in Nigeria"
          className="w-[80%] max-w-[700px] h-auto object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default First;
