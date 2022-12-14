import React from "react";
import Details from "../components/teamDetails";
import Card from "./card";

const team = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
        <div className="max-w-[1180px] mx-auto ">
          <h1 className="pt-8 text-center text-3xl text-white font-bold font-Roboto">
            Club Members
          </h1>
          <div className=" mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 pb-14">
            {Details.map((card) => {
              return (
                <Card
                branch={card.branch}
                  key={card.id}
                  name={card.name}
                  img={card.img}
                  linkdin={card.linkdin}
                  instagram={card.instagram}
                  github={card.github}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default team;
