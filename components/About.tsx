import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="h-auto bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <div className="h-96 w-1/2 mx-auto bg-slate-200  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-0 border-gray-100 rounded-xl p-4">
        <h1 className="text-white font-Roboto font-bold text-2xl text-center">{"$"} About the Codezen</h1>
        <h1 className="p-8 font-Roboto text-white">
          Codezen is a club formed under the <span className="underline underline-offset-2 text-green-300"><Link href="https://captivators.vercel.app/">CAPTIVATORS </Link></span>
            club which is made by some coding enthusiast student from deparment of CSIT,Mahatma Jyotiba Phule Rohilkhand University.
            Our goal is create a environment of coding in campus which is lacking till now.
            We will introduce Competetive Programming , Web development , How to clear GSOC yes you heard
            right we have a first GSCOer of college in Codezen <span className="underline underline-offset-2 text-green-300"> <Link href="https://rosekamallove.vercel.app/">Rose Kamal Love </Link></span>
            and many more coding related stuffs which definately helps you in your journey to 
            become a better enginner.
        </h1>
        <h1 className="p-8 font-Roboto text-white">
          You just have to fill the <span className="underline underline-offset-2 text-green-300"> <Link href="https://rosekamallove.vercel.app/">google form </Link></span>
          to join the club and we will contact you for further activity's which will be held under Codezen
        </h1>
      </div>

    </div>
  );
};

export default About;
