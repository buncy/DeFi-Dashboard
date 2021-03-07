import React from "react";
import "../../assets/sidebar.css";

export default function Card(props) {
  return (
    <div className="rounded-md border border-solid border-gray-300	 overflow-hidden max-w-sm  card-bg">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{props.title}</div>
        <p className="text-gray-500 text-base">{props.secondaryText}</p>
      </div>
    </div>
  );
}
