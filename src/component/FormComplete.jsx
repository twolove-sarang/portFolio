import React from 'react';
import useWorkForm from '../hooks/useWorkForm';

export default function FormComplete() {
  const {
    workFormQuery: { data: workForm },
  } = useWorkForm();

  return (
    <>
      <div className="text-center text-teal-700 font-bold text-2xl my-10">
        신청 내역
      </div>
      <div className="flex justify-center text-center">
        <div className=" basis-1/3">기업명</div>
        <div className=" basis-1/3">완료여부</div>
        <div className=" basis-1/3">마감기한</div>
      </div>
      <div className="text-center mb-32">
        {workForm &&
          workForm.map((el) => (
            <div className="flex justify-center my-5">
              <div className="font-bold basis-1/3">{el.name}</div>
              <div className=" basis-1/3">신청이 완료되었습니다.</div>
              <div className=" basis-1/3">{el.dateEnd}</div>
            </div>
          ))}
      </div>
    </>
  );
}
