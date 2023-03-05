import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PortFolioSectionComponent from '../component/PortFolioSectionComponent';
import portfolioinfo from '../json/portfolioinfo.json';

const values = Object.values(portfolioinfo);
export default function PortFolioSection() {
  return (
    <>
      <div className="text-center mt-28 md:mt-32 text-xl md:text-4xl">
        Port Folio List
      </div>
      <div
        className="flex items-center justify-center text-sm md:text-lg mt-2 md:mt-4
      hover:underline duration-150"
      >
        <Link to={'/note'}>작업노트 보러가기</Link>
        <AiOutlineArrowRight />
      </div>
      <div className="flex flex-wrap shrink-0 mt-4 md:mt-10 justify-center">
        {values.map((el) => (
          <PortFolioSectionComponent el={el} key={el.name} />
        ))}
      </div>
    </>
  );
}
