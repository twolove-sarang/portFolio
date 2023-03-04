import React from 'react';

export default function CommentsSection() {
  return (
    <div className="bg-slate-100 mt-10">
      <div
        className="w-full h-64 md:h-96 bg-teal-700"
        style={{
          backgroundImage: `url(site/robots.jpeg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
      <h1 className="text-center mt-10 md:mt-14 text-lg md:text-3xl font-bold">
        빠른 성장 보다 큰 성장을 하고 싶습니다.
      </h1>
      <p className="text-center mt-10 mb-10 pb-10 md:pb-14 text-sm md:text-lg mx-auto">
        사람과 사람사이를 이어주는 것,
        <br />
        그리고 보다 나은 생활과 환경을 만드는 것<br />
        이보다 좋은 개발자로써의 목표는 없다고 생각합니다.
        <br />
        신입 개발자로서 많이 배우고 성장하고 싶습니다 😃
      </p>
    </div>
  );
}
