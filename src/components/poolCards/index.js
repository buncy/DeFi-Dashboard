import React from "react";
import "../../assets/sidebar.css";
import profile_1 from "../../assets/img/profile_pic_1.jpg";

export default function ComplexCard(props) {
  let nextPayment;
  let fifthItem;
  if (props.thirdItem) {
    nextPayment = (
      <li className="w-full px-1 py-2 flex flex-row justify-between items-center">
        <span className="text-gray-500">{props.thirdItem}</span>
        <span className="font-semibold">{props.thirdValue}</span>
      </li>
    );
  }
  if (props.fifthItem) {
    fifthItem = (
      <li className="w-full px-1 py-2 flex flex-row justify-between items-center">
        <span className="text-gray-500">{props.fifthItem}</span>
        <span className="font-semibold">{props.fifthValue}</span>
      </li>
    );
  }
  return (
    <div className="rounded w-full max-w-sidebar overflow-hidden shadow-lg mb-5 py-5 ">
      <div className="px-4 flex flex-row ">
        <div
          id="avatar"
          className="flex flex-row justify-center items-center px-1"
        >
          <img
            className="rounded-full  w-16 h-16"
            src={profile_1}
            alt="profile_pic"
          />
        </div>
        <div className="px-4">
          <div className="font-semibold text-lg ">Stani.eth</div>
          <p className="text-gray-500 text-base">@stanikulechove</p>
          <div className="flex flex-row pt-4 ">
            <span className="w-20 rounded border text-center text-xs border-solid border-gray-300 sidebar-btn h-6">
              {props.tag1}
            </span>

            <span className="w-20 ml-2  rounded text-center text-xs border border-solid border-gray-300  h-6">
              {" "}
              {props.tag2}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-7">
        <ul>
          <li className="w-full px-1 py-2 flex flex-row justify-between items-center">
            <span className="text-gray-500">Borrow Rate</span>
            <span className="font-semibold">{props.borrowRate}</span>
          </li>
          <li className="w-full px-1 py-2 flex flex-row justify-between items-center">
            <span className="text-gray-500">Borrowed Amount</span>
            <span className="font-semibold">{props.borrowAmount}</span>
          </li>
          {nextPayment}
          <li className="w-full px-1 py-2 flex flex-row justify-between items-center">
            <span className="text-gray-500">{props.fourthItem}</span>

            <div className="relative w-32 pt-1">
              <div className="flex flex-row items-center justify-between">
                <span className="font-semibold">{props.percentage}</span>
                <div className="overflow-hidden w-2/3 h-2 text-xs flex rounded bg-gray-200">
                  <div
                    style={{ width: `${props.percentage}` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
                  ></div>
                </div>
              </div>
            </div>
          </li>
          {fifthItem}
        </ul>
      </div>
      <div className="w-full px-5 py-1">
        <button
          className={`w-full text-center text-black px-4 py-3 ${props.btnColor} hover:bg-blue-500  md:rounded`}
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
}
