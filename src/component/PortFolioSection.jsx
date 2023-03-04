import React from 'react';
import PortFolioSectionComponent from '../component/PortFolioSectionComponent';

const portFolioObject = {
  kongbizzi: {
    name: '콩비찌',
    script: '반려동물, 마음껏 자랑하세요',
    color: '007236',
    font: 'GmarketSansMedium',
    url: '사이트주소적기',
  },
  cssproject: {
    name: 'HEX_CSS',
    script: '더이상 컬러로 고민하지 마세요',
    color: '69792f',
    font: 'S-CoreDream-3Light',
    url: 'https://csscolorvariation.netlify.app/',
  },
  contact: {
    name: '연락처 with Firebase',
    script: '파이어베이스 연동 간단 연락처',
    color: '96a691',
    font: 'TTTtangsbudaejjigaeB',
    url: 'https://withwithshop.netlify.app/',
  },
  weather: {
    name: 'WEATHER+',
    script: '주변 날씨 탐색하기',
    color: '7da060',
    font: 'bitbit',
    url: '사이트주소적기',
  },
  portfolio: {
    name: 'portfolio',
    script: '사이드 포트폴리오를 모아보았습니다',
    color: 'b5c6b4',
    font: 'Tenada',
    url: '사이트주소적기',
  },
  pokemon: {
    name: '포켓몬',
    script: '내 꿈은 포켓몬 마스터!',
    color: '517470',
    font: 'TmonMonsori',
    url: '사이트주소적기',
  },
  shop: {
    name: 'WITHWITH',
    script: '쇼핑몰 클론 코딩',
    color: 'adc3b7',
    font: 'Chosunilbo_myungjo',
    url: '사이트주소적기',
  },
  youtube: {
    name: 'YOUTUBE clone project',
    script: '유튜브 클론 코딩',
    color: 'b2c1a2',
    font: 'OTWelcomeRA',
    url: '사이트주소적기',
  },
  movie: {
    name: 'MOVIE clone project',
    script: '영화 사이트 클론 코딩',
    color: '9ca89e',
    font: 'SF_HambakSnow',
    url: 'https://moviesurf2.netlify.app/',
  },
};

const values = Object.values(portFolioObject);
export default function PortFolioSection() {
  return (
    <>
      <div className="text-center mt-32 text-4xl">Port Folio List</div>
      <div className="flex flex-wrap shrink-0 mt-16 justify-center">
        {values.map((el) => (
          <PortFolioSectionComponent el={el} key={el.name} />
        ))}
      </div>
    </>
  );
}
