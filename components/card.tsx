import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Card = (props: {
  key: any;
  name: any;
  img: any;
  github: any;
  instagram: any;
  linkdin: any;
  branch:any
}) => {
  return (
      <div className="bg-slate-200 mx-4 md:mx-0 shadow-2xl shadow-indigo-700  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100 rounded-xl md:h-72 h-auto md:w-72 w-auto">
        <img
          className="rounded-full h-44 w-44 mx-auto mt-4"
          src={props.img}
          alt=""
        />
        <h1 className="text-xl font-Roboto font-semibold text-white text-center">
          {props.name}
        </h1>
        <p className="text-sm font-Roboto font-semibold text-gray-400 text-center">{props.branch}</p>
        <div className="flex justify-around md:mt-2 mt-4 mx-auto w-32 mb-2 md:mb-0">
          <a className="text-2xl text-white hover:text-black" href={props.github}>
            <FaGithub />
          </a>
          <a className="text-2xl text-white hover:text-black" href={props.instagram}>
            <FaInstagram />
          </a>
          <a className="text-2xl text-white hover:text-black" href={props.linkdin}>
            <FaLinkedin />
          </a>
        </div>
      </div>
   
  );
};

export default Card;
