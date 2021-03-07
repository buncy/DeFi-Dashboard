import React from "react";
import { IMPORTANT } from "../../constants";
import ComplexCard from "../complexCard";

export default function SideBar() {
  const important = IMPORTANT.map((data, index) => (
    <ComplexCard
      key={index}
      src={data.src}
      secondaryText={data.secondary}
      subText={data.subText}
    />
  ));
  return (
    <div>
      <header className="flex flex-row items-center ">
        <h2 className="text-2xl pl-10 pr-1 space-y-4  leading-6 font-medium text-black">
          Important
        </h2>
        <span className="text-gray-400 text-base">(3)</span>
      </header>
      <div className="pt-5  px-10 ">{important}</div>
    </div>
  );
}
