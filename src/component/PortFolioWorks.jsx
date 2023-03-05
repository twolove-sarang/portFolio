import React from 'react';
import PortFolioSmallTitle from './PortFolioSmallTitle';

export default function PortFolioWorks({
  list: {
    name,
    color,
    script,
    font,
    url,
    github,
    velog,
    purpose,
    worth,
    mistake,
    preview,
  },
}) {
  const portFolioWorksStyle = {
    fontFamily: `${font}`,
    color: `#${color}`,
  };
  const portFolioWorksStyle2 = {
    fontFamily: `${font}`,
  };

  return (
    <div className="my-8 shrink-0 md:border rounded-2xl w-full pb-10 mb-24 p-4">
      <div
        style={portFolioWorksStyle2}
        className="text-2xl sm:text-3xl lg:text-5xl text-center my-4 md:my-10"
      >
        <a href={url}>{name}</a>
      </div>
      <div className="text-center my-5 text-sm">
        제목을 누르면 웹페이지로 이동합니다.
      </div>
      <div
        style={{
          backgroundImage: `url('${preview}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full h-96 flex items-center justify-center sm:-mt-10 md:mt-0"
      ></div>
      <div className="text-left md:text-center md:mt-16 ">
        <PortFolioSmallTitle name="Description" style={portFolioWorksStyle} />
        <div className="text-md font-bold">{script}</div>

        {velog ? (
          <div className="md:flex justify-around">
            <div>
              <PortFolioSmallTitle
                name="블로그 바로가기"
                style={portFolioWorksStyle}
              />
              {velog &&
                velog.map((el, index) => (
                  <div className="flex-col my-2 hover:font-bold hover:scale-110 hover:animate-bounce">
                    <a href={el.velog}>바로가기 {[index + 1]}편</a>
                  </div>
                ))}
            </div>

            <div>
              <PortFolioSmallTitle
                name="깃허브 바로가기"
                style={portFolioWorksStyle}
              />
              <a href={github}>
                <img
                  alt="githublogo"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  className="w-8 md:w-10 md:mx-auto transition-all hover:scale-125 hover:-rotate-12 duration-300"
                />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <PortFolioSmallTitle
              name="깃허브 바로가기"
              style={portFolioWorksStyle}
            />
            <a href={github}>
              <img
                alt="githublogo"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                className="w-8 md:w-10 md:mx-auto transition-all hover:scale-125 hover:-rotate-12 duration-300"
              />
            </a>
          </div>
        )}

        <div className="w-96 md:mx-auto text-left md:text-center mb-10">
          {purpose ? (
            <>
              <PortFolioSmallTitle
                name="만들게 된 목적"
                style={portFolioWorksStyle}
              />
              <p>{purpose}</p>
            </>
          ) : (
            <></>
          )}

          {worth ? (
            <>
              <PortFolioSmallTitle
                name="프로젝트를 만들면서 사용한 라이브러리나 기술"
                style={portFolioWorksStyle}
              />
              <p>{worth}</p>
            </>
          ) : (
            <></>
          )}

          {mistake ? (
            <>
              <PortFolioSmallTitle
                name="아쉬운점 / 개선할 점"
                style={portFolioWorksStyle}
              />
              <p>{mistake}</p>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
