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
    transitionDuration: isHover ? '300ms' : '300ms',
  };

  return (
    <div
      style={textStyle}
      className="text-3xl w-64 h-44 text-center hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-center items-center w-64 h-44">
        <a href={url} className="w-32">
          {name}
        </a>
      </div>
    </div>
  );
}
