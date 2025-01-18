import React from "react";
import { IoPlay } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="w-4/5  py-20 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="ms:w-1/2 space-y-6">
        <p>______Innovation Requires Invasion</p>
        <h1 className="text-5xl md:text-7xl font-bold">
          Being Invader Requires Lots of Balls
        </h1>
        <p className="md:text-lg">
          Understanding your capacity of invasion can ensure your success in
          navigating your new teritory.
        </p>
        <div className="flex space-x-5">
          <button className="px-5 py-3 rounded-full font-semibold bg-black text-white">
            Book
          </button>
          <button className="flex space-x-4 items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-black text-white rounded-full">
              {""}
              <IoPlay />
            </span>
            {""}
            <span> Watch Video</span>
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <img
          className="w-full"
          src="./blob.svg"
          alt="hero"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
}
