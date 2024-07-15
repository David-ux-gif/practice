import React from "react";

function Card({props}) {
  return (
    <div className="w-full flex flex-col">
      <img
        src={props.img}
        alt={props.name}
        className="h-60 w-full object-cover "
      />
      <h2 className="text-xl font-medium "> {props.name}</h2>

      <p>{props.desc.slice(0, 300)}.....</p>
      <div className="flex justify-between">
        <p className="inline">Rs {props.price}</p>
        <button className="inline bg-green-500 rounded m-2 p-1">
          Book now
        </button>
      </div>
    </div>
  );
}

export default Card;
