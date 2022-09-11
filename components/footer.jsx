import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-gray-900 border-t-2 border-gray-600">
      <div className=" flex flex-col md:flex-row-reverse mt-2 ml-8">
        
        <div className="md:w-1/3 w-auto h-auto mb-4">
          <h1 className="font-Roboto text-gray-200 text-sm underline underline-offset-4 mb-0 md:mb-4">
            ACTIVITY
          </h1>
          <ul>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
           Codezen conduct Regular Hackathon
          </li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">Coding Contest in College</li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
           Exploring various tech in Development 
          </li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
           Team meetups to enhance leadership
          </li>
          </ul>
        </div>
        <div className="md:w-1/3 w-auto h-auto mb-4">
          <h1 className="font-Roboto text-gray-200 text-sm underline underline-offset-4 mb-0 md:mb-4">
            CONTACT US
          </h1>
          <ul>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
            club.csitmjpru@gmail.com
          </li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">+91-8534833926</li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
            Harshit Kumar Singh (Student Incharge)
          </li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
            Department Of CSIT,
          </li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
            Mahatma Jyotiba Phule Rohilkhand University,
          </li>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
            Bareilly, Uttar Pradesh Pincode:-243006
          </li>
          </ul>
        </div>
        <div className="md:w-1/3 w-auto h-auto mb-4 ">
          <h1 className="font-Roboto text-start text-gray-200 text-sm underline underline-offset-4 mb-0 md:mb-4">
            LINKS
          </h1>
          <ul>
          <li className="font-Roboto list-disc text-gray-200 text-sm">
           Official Website of <span className="underline underline-offset-2 text-green-300"><Link href="https://mjpru.ac.in/">College</Link></span>
          </li>
          <li className="font-Roboto list-disc text-gray-200 text-sm"><span className="underline underline-offset-2 text-green-300"><Link href="https://captivators.vercel.app/">CAPTIVATORS</Link></span> website</li>
          </ul>
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
