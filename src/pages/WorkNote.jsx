import React, { useState } from 'react';
import PortFolioList from '../component/PortFolioList';
import portfolioinfo from '../json/portfolioinfo.json';
import PortFolioWorks from '../component/PortFolioWorks';

export default function WorkNote() {
  const portFolioValues = Object.values(portfolioinfo);
  const [workName, setWorkName] = useState('portfolio');
  const handleClick = (el) => {
    setWorkName(el.target.innerHTML);
  };
  return (
    <div className="px-10 sm:px-20 md:px-30 lg:px-52">
      <div className="flex flex-wrap mt-8 items-center justify-center">
        {portFolioValues.map((el) => (
          <>
            <PortFolioList list={el} key={el.name} handleClick={handleClick} />
          </>
        ))}
      </div>

      <div className="w-full overflow-scroll flex justify-start">
        {portFolioValues.map((el) => (
          <>
            {el.name === workName ? (
              <PortFolioWorks list={el} key={el.name} />
            ) : (
              ''
            )}
          </>
        ))}
      </div>
    </div>
  );
}
