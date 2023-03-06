import React, { useState } from 'react';
import { updateWorkContact } from '../api/firebase';
import ButtonForWork from '../component/ButtonForWork';

const works = [
  { id: 1, name: `웹 페이지 디자인(1p)`, isToggle: false },
  { id: 2, name: `프론트엔드 로직 설계`, isToggle: false },
  { id: 3, name: `프론트엔드 유지/보수`, isToggle: false },
];

export default function ContactForWork() {
  const [text, setText] = useState({});
  const [button, setButton] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((text) => ({ ...text, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateWorkContact(text, button);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setText({});
  };
  const handleClickButton = (name) => {
    if (!button.includes(name)) {
      return setButton([...button, name]);
    } else {
      setButton(button.filter((el) => el !== name));
    }
  };

  console.log(button);
  const textStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '14px',
    textAlign: 'center',
  };
  const inputStyle = {
    padding: '8px',
    outline: 'none',
    border: '1px solid #0f766e',
    borderRadius: '6px',
  };

  return (
    <div className="md:mx-52 rounded-xl mb-10 lg:border pb-10">
      <div className="text-center text-4xl font-extrabold text-teal-700 mt-10 md:pt-20">
        Submission Form
      </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="sm:flex gap-4 justify-center text-center">
          <div>
            <div style={textStyle}>성함 / 기업명</div>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={text.name ?? ''}
              placeholder="성함/기업명을 입력해주세요"
              style={inputStyle}
              required
            />
          </div>
          <div>
            <div style={textStyle}>전화번호</div>
            <input
              onChange={handleChange}
              type="text"
              name="contact"
              value={text.contact ?? ''}
              placeholder="전화번호를 입력해주세요"
              style={inputStyle}
              required
            />
          </div>
        </div>

        <div style={textStyle} className="text-center pt-10 pb-5">
          작업 문의
        </div>
        <div className="mx-10 sm:mx-16 md:mx-20 lg:mx-40">
          {works.map((item) => (
            <ButtonForWork
              key={item.id}
              id={item.id}
              name={item.name}
              isToggle={item.isToggle}
              onClick={handleClickButton}
            />
          ))}
        </div>

        <p className="text-center pt-10 pb-6" style={textStyle}>
          기간을 지정해 주세요
        </p>
        <div className="sm:flex justify-center gap-10 items-center text-center">
          <div className=" justify-center gap-10 items-center">
            <div style={textStyle}>시작날짜</div>
            <input
              onChange={handleChange}
              type="date"
              name="dateStart"
              required
            />
          </div>
          <div>~</div>
          <div className="justify-center gap-10 items-center">
            <div style={textStyle}>마감기한</div>
            <input
              onChange={handleChange}
              type="date"
              name="dateEnd"
              required
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="bg-teal-700 text-white w-96 p-4 rounded-lg mt-10 font-bold active:brightness-110 basis-1/4 text-xs md:text-base">
            제출하기
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white w-96 p-4 rounded-lg mt-10 font-bold active:brightness-110 basis-1/4 text-xs md:text-base"
          >
            삭제하기
          </button>
        </div>
      </form>
    </div>
  );
}
