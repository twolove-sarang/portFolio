import React from 'react';
import StackSectionComponent from '../component/StackSectionComponent';

const stackObject = {
  html_css: {
    name: 'html/css',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png',
    script: '막힘없이 할 수 있습니다.',
    level: '10',
  },
  javascript: {
    name: 'JS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    script: '저의 주력 언어입니다.',
    level: '9',
  },
  react: {
    name: 'React',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png',
    script: '제가 제일 자신있는 라이브러리 입니다.',
    level: '9',
    animation: 'animate-bounce',
  },
  node: {
    name: 'Node.js',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
    script: '열심히 공부하고 있습니다!',
    level: '2',
  },
};

const values = Object.values(stackObject);
export default function StackSection() {
  return (
    <>
      <div className="flex gap-16 items-start justify-center">
        {values.map((el) => (
          <StackSectionComponent el={el} key={el.name} />
        ))}
      </div>
    </>
  );
}
