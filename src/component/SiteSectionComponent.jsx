import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function SiteSectionComponent({
  el: { name, url, img, script },
}) {
  return (
    <div className="flex-col">
      <div className="flex items-center gap-2">
        <img src={img} className="w-5 h-5 rounded-full" alt="name" />
        <div className="font-bold text-sm">{name}</div>
      </div>
      <div className="w-52 h-20 my-4 text-md font-medium">{script}</div>
      <div className="flex items-center">
        <a
          href={url}
          className="font-medium text-md hover:mr-4 px-2 duration-300 -ml-2
          hover:font-bold hover:text-white hover:bg-teal-700 hover:rounded-full"
        >
          {name} 바로가기
        </a>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
}
