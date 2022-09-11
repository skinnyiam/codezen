import React from "react";

const EventCard = (props: { key: any; eventName: any; img: any,url:any }) => {
  return (
    <div className="bg-slate-200 pb-4 mx-4 md:mx-0 shadow-2xl shadow-indigo-700  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100 rounded-xl md:h-84 h-auto md:w-72 w-auto">
      <img
        className="rounded-full h-44 w-44 mx-auto mt-4"
        src={props.img}
        alt=""
      />
      <h1 className="text-xl font-Roboto font-semibold text-white text-center">
        {props.eventName}
      </h1>
      <div className="flex justify-center">
      <a href={props.url} className="p-2 cursor-pointer font-Roboto transition ease-in-out delay-150 bg-blue-800 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-4  h-10 w-32 rounded-xl text-white font-bold text-xl bg-sky-500/100">
        View Event
      </a>
      </div>
    </div>
  );
};

export default EventCard;
