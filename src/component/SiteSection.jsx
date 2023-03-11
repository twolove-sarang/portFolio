import React from 'react';
import SiteSectionComponent from '../component/SiteSectionComponent';
import siteSectionObject from '../json/siteSection.json';

const values = Object.values(siteSectionObject);
export default function SiteSection() {
  return (
    <div className="md:flex items-start gap-10 justify-center mt-10">
      {values.map((el) => (
        <SiteSectionComponent el={el} key={el.name} />
      ))}
    </div>
  );
}
