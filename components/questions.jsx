import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 pt-16 pb-10">
      <div className="pb-10 mx-4 md:mx-0">
        <h1 className="font-Roboto text-2xl text-center text-white"><span className="font-Roboto text-2xl text-gray-400">npm start </span>Frequently-asked-questions</h1>
      </div>
    <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row-reverse p-4">
    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="font-Roboto text-center text-xl font-bold text-white" onClick={() => handleOpen(3)}>
          How much time should i have to devote 
          in club ?
        </AccordionHeader>
        <AccordionBody className="font-Roboto text-sm  text-white">
          Here we are gather to learn and grow so it 
          depends on you how much you want to learn and spend time
          in Codezen
        </AccordionBody>
      </Accordion>
      <Accordion className="" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="font-Roboto text-center text-xl font-bold text-white" onClick={() => handleOpen(1)}>
          How codezen will help me ?
        </AccordionHeader>
        <AccordionBody className="font-Roboto text-sm  text-white">
          Codezen have a team of good coders and they will share their
          experciences which will add value to your coding journey.
          Codezen will provide all kind of technical support throughout 
          your college life.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="font-Roboto text-xl font-bold text-white" onClick={() => handleOpen(2)}>
          I am noob, can i Join ?
        </AccordionHeader>
        <AccordionBody className="font-Roboto text-sm  text-white">
          As members of codezen are also student and not pro we are still 
          learning and we belive in learning together and growing together.
          So if you dont know C about coding you still can join us.
        </AccordionBody>
      </Accordion>
    
    </div>
    </div>
   
  );
}
