import React from 'react';

export default function StackSectionComponent({
  el: { name, img, script, level, animation },
}) {
  return (
    <div className="mt-16 mb-20 w-28">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'white',
        }}
        className="w-28 h-28"
        alt={name}
      />
      {animation ? (
        <div className="text-center font-bold text-xl mt-8 animate-bounce">
          {name}
        </div>
      ) : (
        <div className="text-center font-bold text-xl mt-8">{name}</div>
      )}

      <div className="text-center text-sm mt-4">
        {script} Lv.{level}/10
      </div>
    </div>
  );
}
