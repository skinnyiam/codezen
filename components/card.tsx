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
      <div className="bg-slate-200 shadow-2xl shadow-indigo-700  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100 rounded-xl h-72 w-72">
        <img
          className="rounded-full h-44 w-44 mx-auto mt-4"
          src={props.img}
          alt=""
        />
        <h1 className="text-xl font-Roboto font-semibold text-white text-center">
          {props.name}
        </h1>
        <p className="text-sm font-Roboto font-semibold text-gray-400 text-center">{props.branch}</p>
        <div className="flex justify-around mt-4 mx-auto w-32">
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
