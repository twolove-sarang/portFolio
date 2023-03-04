import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarSection() {
  return (
    <div className="flex justify-between items-center py-5 px-20">
      <div className="p-4">
        <div className="text-md text-teal-700 font-extrabold">
          Lovely, Love-Lee's
        </div>
        <Link to={'/'} className="font-extrabold text-4xl text-teal-700">
          <div>PortFolio</div>
        </Link>
      </div>
      <div className="flex gap-4 p-4">
        <Link to={'/note'} className="hover:text-teal-700 hover:font-bold ">
          작업노트
        </Link>
        <Link to={'/comment'} className="hover:text-teal-700 hover:font-bold">
          코멘트
        </Link>
        <Link to={'/note'} className="hover:text-teal-700 hover:font-bold">
          작업문의
        </Link>
        <Link to={'/sponsor'} className="hover:text-teal-700 hover:font-bold">
          후원하기
        </Link>
      </div>
    </div>
  );
}
