import React from "react";
import "../../assets/sidebar.css";

export default function ComplexCard(props) {
  return (
    <div className="rounded w-full max-w-sidebar overflow-hidden shadow-lg mb-5 py-5 ">
      <div className="ml-6 flex flex-row ">
        <div id="avatar" className="">
          <img
            className="rounded-full  w-14"
            src={props.src}
            alt="profile_pic"
          />
        </div>
        <div className="px-4">
          <div className="font-bold text-lg ">Vote for extension</div>
          <p className="text-gray-500 text-base">{props.secondaryText}</p>
          <p className="text-gray-500 text-base pt-2">{props.subText}</p>
        </div>
      </div>
      <div className="flex flex-row pt-4 ">
        <button className="w-32 ml-6  rounded border border-solid border-gray-300 bg-gray-200 h-9">
          Vote
        </button>
        <button className="w-32 ml-6  rounded border border-solid border-gray-300  h-9">
          Dismiss
        </button>
      </div>
    </div>
  );
}
