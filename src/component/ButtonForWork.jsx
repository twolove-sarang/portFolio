import React, { useState } from 'react';

export default function ButtonForWork({ id, name, isToggle, onClick }) {
  const [toggle, setToggle] = useState(isToggle);

  const handleClickF1orToggle = (e) => {
    e.preventDefault();
    setToggle((isToggle) => !isToggle);
    onClick(e.target.innerHTML);
  };

  const buttonStyle = {
    backgroundColor: toggle ? '#0f766e' : '',
    fontWeight: toggle ? 'bold' : '',
    color: toggle ? 'white' : '',
  };
  return (
    <>
      <button
        id={id}
        onClick={handleClickF1orToggle}
        style={buttonStyle}
        className="border p-4 mb-4 rounded-lg w-full"
      >
        {name}
      </button>
    </>
  );
}
