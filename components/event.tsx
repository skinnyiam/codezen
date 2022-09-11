import React from "react";
import EventDetails from "./eventDetails";
import EventCard from "../components/eventCard";

const Event = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <div className="max-w-[1180px] mx-auto pt-10">
        <h1 className="text-3xl font-bold  font-Roboto text-white text-center">
          Recent Event
        </h1>
        <div className=" mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 pb-14">
          {EventDetails.map((card) => {
            return (
              <EventCard
                key={card.id}
                eventName={card.eventName}
                img={card.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Event;
