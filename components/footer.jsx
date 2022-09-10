import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-56 bg-gray-900 border-t-2 border-gray-600">
      <div className=" flex mt-2 ml-8">
        
        <div className="w-1/3 h-44">
          <h1 className="font-Roboto text-gray-200 text-sm hover:underline hover:underline-offset-4 mb-4">
            ACTIVITY
          </h1>
          <p className="font-Roboto text-gray-200 text-sm">
           Codezen conduct Regular Hackathon
          </p>
          <p className="font-Roboto text-gray-200 text-sm">Coding Contest in College</p>
          <p className="font-Roboto text-gray-200 text-sm">
           Exploring various tech in Development 
          </p>
          <p className="font-Roboto text-gray-200 text-sm">
           Team meetups to enhance leadership
          </p>
          
        </div>
        <div className="w-1/3 h-44">
          <h1 className="font-Roboto text-gray-200 text-sm hover:underline hover:underline-offset-4 mb-4">
            CONTACT US
          </h1>
          <p className="font-Roboto text-gray-200 text-sm">
            club.csitmjpru@gmail.com
          </p>
          <p className="font-Roboto text-gray-200 text-sm">+91-8534833926</p>
          <p className="font-Roboto text-gray-200 text-sm">
            Harshit Kumar Singh (Student Incharge)
          </p>
          <p className="font-Roboto text-gray-200 text-sm">
            Department Of CSIT,
          </p>
          <p className="font-Roboto text-gray-200 text-sm">
            Mahatma Jyotiba Phule Rohilkhand University,
          </p>
          <p className="font-Roboto text-gray-200 text-sm">
            Bareilly, Uttar Pradesh Pincode:-243006
          </p>
        </div>
        <div className="w-1/3 h-44 ">
          <h1 className="font-Roboto text-start text-gray-200 text-sm hover:underline hover:underline-offset-4 mb-4">
            LINKS
          </h1>
          <p className="font-Roboto text-gray-200 text-sm">
           Official Website of <span className="underline underline-offset-2 text-green-300"><Link href="https://mjpru.ac.in/">College</Link></span>
          </p>
          <p className="font-Roboto text-gray-200 text-sm"><span className="underline underline-offset-2 text-green-300"><Link href="https://captivators.vercel.app/">CAPTIVATORS</Link></span> website</p>
          <div className="flex justify-evenly mt-4  w-32">
          <a className=" text-gray-200 text-2xl">
          <FaFacebook />
          </a>
          <a className=" text-gray-200 text-2xl">
            <FaInstagram />
          </a>
          <a className=" text-gray-200 text-2xl">
          <FaLinkedin />
          </a>
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Footer;
