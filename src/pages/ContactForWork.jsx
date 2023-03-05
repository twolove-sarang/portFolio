import React, { useState } from 'react';
import { updateWorkContact } from '../api/firebase';

export default function ContactForWork() {
  const [text, setText] = useState({});
  const [toggle, setToggle] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((text) => ({ ...text, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateWorkContact(text);
    // setText({});
  };
  const handleClick = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    setText({});
  };
  const textStyle = {
    marginTop: '10px',
    marginBottom: '18px',
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
  const buttonStyle = {
    backgroundColor: toggle ? '#0f766e' : '',
    fontWeight: toggle ? 'bold' : '',
    color: toggle ? 'white' : '',
  };
  return (
    <div className="md:mx-52 rounded-xl mb-10 md:border pb-10">
      <div className="text-center text-4xl font-extrabold text-teal-700 pt-10">
        Submission Form
      </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="flex gap-4 justify-center">
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
        <div className="w-96 mx-auto">
          <button
            onClick={handleClick}
            style={buttonStyle}
            className="border p-4 mb-4 rounded-lg w-full"
          >{`웹 페이지 디자인(1p)`}</button>
          <button
            onClick={handleClick}
            style={buttonStyle}
            className="border p-4 mb-4 rounded-lg w-full"
          >{`프론트엔드 로직 설계`}</button>
          <button
            onClick={handleClick}
            style={buttonStyle}
            className="border p-4 mb-4 rounded-lg w-full"
          >{`프론트엔드 유지/보수`}</button>
        </div>

        <p className="text-center pt-10 pb-6" style={textStyle}>
          기간을 지정해 주세요
        </p>
        <div className="flex justify-center gap-10 items-center">
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
          <button
            // onClick={handleSubmit}
            className="bg-teal-700 text-white w-96 p-4 rounded-lg mt-10 font-bold active:brightness-110 basis-1/4"
          >
            제출하기
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white w-96 p-4 rounded-lg mt-10 font-bold active:brightness-110 basis-1/4"
          >
            삭제하기
          </button>
        </div>
      </form>
    </div>
  );
}
