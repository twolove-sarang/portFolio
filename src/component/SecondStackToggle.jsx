import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';
import SecondStackSectionComponent from './SecondStackSectionComponent';
import secondStackObject from '../json/secondStackObject.json';
import StackName from './StackName';

const secondValues = Object.values(secondStackObject);
export default function SecondStackToggle({ number, name }) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <StackName name={name} />
        <div className="md:text-xl text-teal-700">
          {toggle ? (
            <>
              <button onClick={handleToggle}>
                <AiFillCaretUp />
              </button>
            </>
          ) : (
            <button onClick={handleToggle}>
              <AiFillCaretDown />
            </button>
          )}
        </div>
      </div>
      {toggle ? (
        <>
          {secondValues[number].map((el, index) => {
            return <SecondStackSectionComponent stack={el} key={index} />;
          })}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
