import React from 'react';
import useComment from '../hooks/useComment';

export default function CommentSection() {
  const {
    commentQuery: { data: comment },
    // commentRemoveMutation,
  } = useComment();

  return (
    <div className="w-full h-screen overflow-scroll mb-10 bg-slate-50 rounded-xl">
      {comment &&
        comment.map((el) => (
          <div className="flex justify-around items-start my-4">
            <div className="text-xs md:text-md basis-1/6">{el.nickname}</div>
            <div className="text-xs md:text-md basis-3/6 text-left">
              <div className="">{el.comment}</div>
            </div>
            <div className="lg:basis-1/6 flex items-center gap-4">
              <div className="text-xs shrink-0">{el.date}</div>
              {/* <button
                onClick={() => commentRemoveMutation.mutate(el.id)}
                className="text-xs px-2 py-1 rounded-full text-teal-700 font-bold shrink-0"
              >
                삭제
              </button> */}
            </div>
          </div>
        ))}
    </div>
  );
}
