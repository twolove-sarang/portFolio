import React, { useState } from 'react';
import { updateContact } from '../api/firebase';
import CommentSection from '../component/CommentSection';
import useComment from '../hooks/useComment';

export default function Comment() {
  const [text, setText] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((text) => ({ ...text, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(text);
    setText({});
  };
  const handleClickToMutation = () => {
    commentMutation.mutate(text);
  };

  const { commentMutation } = useComment();

  return (
    <div className="text-center px-10 md:px-32 py-10">
      <div className="font-bold mb-10">
        열심히 작업한 사랑이에게 응원의 한마디 해주세요 😘
        <br />( 삭제는 관리자만 가능합니다 ✨ )
      </div>
      <form onSubmit={handleSubmit} className="md:flex md:justify-center mb-10">
        <input
          type="text"
          name="nickname"
          value={text.nickname ?? ''}
          onChange={handleChange}
          className="bg-gray-100 px-1 py-2 rounded-lg mx-2 text-teal-700 outline-none basis-1/4 w-full mt-5
          md:px-4 md:py-3 md:mr-5 md:mt-0 "
          placeholder="닉네임을 입력해주세요"
          maxLength={20}
          required
        />
        <input
          type="text"
          name="comment"
          value={text.comment ?? ''}
          onChange={handleChange}
          className="bg-gray-100 px-1 py-2 rounded-lg mx-2 text-teal-700 outline-none basis-2/4 w-full mt-5
          md:px-4 md:py-3 md:mr-5 md:mt-0"
          placeholder="코멘트를 적어주세요"
          required
        />
        {commentMutation.isLoading ? (
          <button
            onClick={() => handleClickToMutation()}
            className="bg-red-700 text-white font-bold px-4 rounded-lg shrink-0 mt-5 md:mt-0  py-2"
          >
            로딩중입니다.
          </button>
        ) : (
          <button
            onClick={() => handleClickToMutation()}
            className="bg-teal-700 text-white font-bold px-4 rounded-lg shrink-0 mt-5 md:mt-0 py-2"
          >
            등록하기
          </button>
        )}
      </form>

      <CommentSection />
    </div>
  );
}
