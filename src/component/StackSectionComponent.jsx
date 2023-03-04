import React from 'react';

export default function StackSectionComponent({
  el: { name, img, script, level, animation },
}) {
  return (
    <div className="md:mt-16 mb-20 w-28">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'white',
        }}
        className="w-16 h-16 md:w-28 md:h-28 mx-auto"
        alt={name}
      />
      <div>
        {animation ? (
          <div className="text-center font-bold text-sm md:text-xl mt-8 animate-bounce">
            {name}
          </div>
        ) : (
          <div className="text-center font-bold text-sm md:text-xl mt-8">
            {name}
          </div>
        )}

        <div className="text-center text-xs md:text-sm mt-4">
          {script} Lv.{level}/10
        </div>
      </div>
    </div>
  );
}
