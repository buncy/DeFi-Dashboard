import React from "react";

export default function MainNavbar(props) {
  const handleOnClick = () => {
    // const navToggle = document.getElementsByClassName("toggle");
    // for (let i = 0; i < navToggle.length; i++) {
    //   navToggle.item(i).classList.toggle("hidden");
    // }
  };
  return (
    <React.Fragment>
      <nav className="flex flex-wrap items-center justify-start p-1 bg-white">
        <div className="w-2/6 pl-3">
          <a
            href="/home"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >
            Sublime
          </a>
        </div>
        <div className="toggle hidden md:flex pl-12 w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 md:border-none">
          <a
            href="#"
            className="block md:inline-block font-bold   px-3 py-3 border-b-2 border-black"
          >
            Dashboard
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
          <a
            href="#"
            className="block md:inline-block   px-3 py-3 border-b-2  md:border-none"
          >
            Your Profile
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}
