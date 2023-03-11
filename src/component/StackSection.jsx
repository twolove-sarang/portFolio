import React from 'react';
import StackSectionComponent from '../component/StackSectionComponent';
import stackObject from '../json/stackObject.json';
import SecondStackToggle from './SecondStackToggle';

const values = Object.values(stackObject);
export default function StackSection() {
  return (
    <>
      <div className="text-center my-8 md:my-12 text-xl md:text-4xl">
        Main Stack
      </div>
      <div className="flex gap-4 md:gap-16 items-start justify-center">
        {values.map((el) => (
          <StackSectionComponent el={el} key={el.name} />
        ))}
      </div>
      <div className="text-center my-8 md:my-12 text-xl md:text-4xl">
        Secondary Stack / Library
      </div>

      <div className="items-center justify-between mb-32">
        <SecondStackToggle number="0" name="Style Stack" />
        <SecondStackToggle number="1" name="Frontend Stack" />
        <SecondStackToggle number="2" name="Backend Stack" />
      </div>
    </>
  );
}
