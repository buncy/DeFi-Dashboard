import React, { useRef } from "react";

export default function Navbar(props) {
  const handleOnClick = () => {
    // const navToggle = document.getElementsByClassName("toggle");
    // for (let i = 0; i < navToggle.length; i++) {
    //   navToggle.item(i).classList.toggle("hidden");
    // }
  };
  return (
    <React.Fragment>
      <nav className="flex flex-wrap items-center justify-between p-1 bg-white">
        <div className="flex md:hidden">
          <button id="hamburger">
            <img
              className="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
            />
            <img
              className="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
            />
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
          <a
            href="#"
            className="block md:inline-block font-bold   px-3 py-3 border-b-2 border-black"
          >
            All Pools
          </a>
          <a
            href="#"
            className="block md:inline-block   px-3 py-3 border-b-2  md:border-none"
          >
            Borrow
          </a>
          <a
            href="#"
            className="block md:inline-block   px-3 py-3 border-b-2  md:border-none"
          >
            Lend
          </a>
        </div>
        {/* <a
          href="#"
          className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right md:rounded"
          onClick={handleOnClick}
        >
          Create Account
        </a> */}
        <div className="flex flex-row">
          <div className="w-40 h-10 flex">
            <button className="bg-white w-auto flex justify-end items-center ">
              <svg
                class="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
            <input
              className="w-full border-transparent text-black rounded p-2"
              type="text"
              placeholder=""
              value="Search"
            />
          </div>
          <select className=" w-40 h-10 px-2 border border-gray-200 rounded">
            <option>Filter by</option>
          </select>
        </div>
      </nav>
    </React.Fragment>
  );
}
