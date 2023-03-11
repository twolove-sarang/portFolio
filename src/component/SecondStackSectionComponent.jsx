import React from 'react';

export default function SecondStackSectionComponent({
  stack: { img, name, level, script },
}) {
  return (
    <>
      <div className="md:w-full md:flex gap-12 justify-center items-center">
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
          }}
          className="w-16 h-16 md:w-28 md:h-28 md:mx-auto my-4"
          alt={name}
        />
        <div className="text-left w-40">
          <div className="text-sm md:text-md font-bold">{name}</div>
          <div className="text-sm md:text-md">Lv.{level}/10</div>
        </div>
        <div className="text-sm md:w-96 mx-auto overflow-scroll my-4">
          {script}
        </div>
      </div>
    </>
  );
}
