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
    <div className="my-8 shrink-0 border rounded-3xl w-full p-4">
      <div
        style={portFolioWorksStyle2}
        className="text-2xl sm:text-3xl lg:text-5xl text-center my-4 md:my-10"
      >
        {name}
      </div>
      <div
        style={{
          backgroundImage: `url('${preview}')`,
          backgroundSize: 'contain',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
        }}
        className="w-full h-96 flex items-center justify-center -mt-12 md:mt-0"
      ></div>
      <div className="text-center mt-16">
        <PortFolioSmallTitle name="Description" style={portFolioWorksStyle} />
        <h3>{script}</h3>
        <div>
          <PortFolioSmallTitle name="블로그 목록" style={portFolioWorksStyle} />
          <p>{velog}</p>
        </div>

        <PortFolioSmallTitle name="깃허브" style={portFolioWorksStyle} />
        <p>{github}</p>

        <PortFolioSmallTitle
          name="웹페이지 미리보기"
          style={portFolioWorksStyle}
        />
        <a href={url}>웹페이지 바로가기</a>

        <PortFolioSmallTitle name="진행과정" style={portFolioWorksStyle} />
        <div>
          <p>만들게 된 목적</p>
          <p>{purpose}</p>
          <p>프로젝트를 하면서 잘 하게 된 것</p>
          <p>{worth}</p>
          <p>아쉬운점 / 개선할 점</p>
          <p>{mistake}</p>
        </div>
      </div>
    </div>
  );
}
