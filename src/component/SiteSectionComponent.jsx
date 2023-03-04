import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function SiteSectionComponent({
  el: { name, url, img, script },
}) {
  return (
    <div className="flex gap-4 md:flex-col mt-10 md:mt-0 justify-center">
      <div className=" md:flex items-center gap-2 justify-center md:justify-start">
        <img src={img} className="w-6 h-6 rounded-full" alt="name" />
        <div className="font-bold text-sm shrink-0 invisible md:visible absolute md:relative">
          {name}
        </div>
      </div>
      <div className="w-60 mx-auto md:w-52 h-20 my-4 text-md font-medium text-center md:text-left invisible md:visible absolute md:relative">
        {script}
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <a
          href={url}
          className="font-medium text-md hover:mr-4 px-2 duration-300 -ml-2
          hover:font-bold hover:text-white hover:bg-teal-700 hover:rounded-full shrink-0"
        >
          {name} 바로가기
        </a>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
}
