import React, { useState } from 'react';

export default function PortFolioList({
  list: { name, color, font },
  handleClick,
}) {
  const listStyle = {
    fontFamily: `${font}`,
    backgroundColor: `#${color}`,
    border: `1px solid #${color}`,
  };

  return (
    <div>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
        style={listStyle}
        className="text-white m-2 text-lg rounded-full px-2 py-1 cursor-pointer active:brightness-110"
      >
        {name}
      </button>
    </div>
  );
}
