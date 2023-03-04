import React from 'react';
import SiteSectionComponent from '../component/SiteSectionComponent';

const siteSectionObject = {
  blog: {
    name: '블로그',
    url: 'https://velog.io/@twolove-sarang',
    img: 'https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg',
    script:
      '에러핸들링, 새로운 지식 그리고 포트폴리오 일지를 담아두고 있습니다.',
  },
  github: {
    name: '깃허브',
    url: 'https://github.com/twolove-sarang',
    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    script: '코드를 지속적 그리고 주기적으로 관리합니다.',
  },
  notion: {
    name: '노션',
    url: 'https://sarang-resume.notion.site/d4e3bcfc978f4b2d94a24c7763c76171',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    script: `'주니어 프론트엔드 개발자 이사랑'의 이력서 입니다.`,
  },
};
const values = Object.values(siteSectionObject);
export default function SiteSection() {
  return (
    <div className="flex items-start gap-10 justify-center mt-10">
      {values.map((el) => (
        <SiteSectionComponent el={el} key={el.name} />
      ))}
    </div>
  );
}
