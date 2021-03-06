import React from "react";
import Card from "../../components/card";
import SideBar from "../../components/sideBar";
import { state } from "../../constants";
import "../../assets/sidebar.css";
import Navbar from "../../components/navbar/Navbar";
import PoolCards from "../../components/poolCards";

export default function Dashboard() {
  const Overview = state.overView.map((data, index) => {
    return <Card key={index} title={data.value} secondaryText={data.text} />;
  });
  const Deposit = state.deposit.map((data, index) => {
    return <Card key={index} title={data.value} secondaryText={data.text} />;
  });
  const Credit = state.credit.map((data, index) => {
    return <Card key={index} title={data.value} secondaryText={data.text} />;
  });
  return (
    <React.Fragment>
      <div className=" w-full flex flex-row pl-32 ">
        <main className="w-3/5">
          <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <header className="flex items-center justify-between">
              <h2 className="text-2xl leading-6 font-medium text-black">
                Overview
              </h2>
            </header>
            <div className="py-2  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {Overview}
            </div>
          </section>
          <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <header className="flex items-center justify-between">
              <h2 className="text-2xl leading-6 font-medium text-black">
                Deposite and Save Overview
              </h2>
            </header>
            <div className="py-2  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {Deposit}
            </div>
            <button className="w-full border rounded border-solid border-gray-200 bg-gray-200 text-center h-9">
              View more
            </button>
          </section>
          <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <header className="flex items-center justify-between">
              <h2 className="text-2xl leading-6 font-medium text-black">
                Credit Lines
              </h2>
            </header>
            <div className="py-2  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
              {Credit}
            </div>
            <button className="w-full border rounded border-solid border-gray-200 bg-gray-200 text-center h-9">
              View more
            </button>
          </section>
          <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <div className="h-4 w-full">
              <Navbar />
            </div>
            <div className=" pt-10 grid grid-cols-2 w-full gap-3">
              {state.poolCards.map((item, index) => (
                <PoolCards
                  key={index}
                  tag1={item.tag1}
                  tag2={item.tag2}
                  borrowRate={item.borrowRate}
                  borrowAmount={item.borrowAmount}
                  thirdItem={item.thirdItem}
                  thirdValue={item.thirdValue}
                  fifthItem={item.fifthItem}
                  fifthValue={item.fifthValue}
                  percentage={item.percentage}
                  fourthItem={item.fourthItem}
                  btnColor={item.btnColor}
                  btnText={item.btnText}
                />
              ))}
            </div>
          </section>
        </main>
        <div
          id="sideBar"
          className="w-5/12 px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 sidebar-bg"
        >
          <SideBar />
        </div>
      </div>
    </React.Fragment>
  );
}
