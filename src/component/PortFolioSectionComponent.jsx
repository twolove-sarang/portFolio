import React, { useState } from 'react';

export default function PortFolioSectionComponent({
  el: { name, url, script, color, font },
}) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const textStyle = {
    fontFamily: `${font}`,
    color: isHover ? `#${color}` : 'black',
    transitionDuration: isHover ? '500ms' : '300ms',
  };

  return (
    <div
      style={textStyle}
      className="text-xl w-40 h-28 md:text-3xl md:w-64 md:h-44 text-center hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="flex justify-center items-center md:w-64 w-40 h-28 md:h-44">
          <a href={url} className="w-32">
            {script}
          </a>
        </div>
      ) : (
        <div className="flex justify-center items-center md:w-64 w-40 h-28 md:h-44">
          <a href={url} className="w-32">
            {name}
          </a>
        </div>
      )}
    </div>
  );
}
