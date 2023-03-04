import React from 'react';
import SiteSection from '../component/SiteSection';
import PortFolioSection from '../component/PortFolioSection';
import StackSection from '../component/StackSection';
import CommentsSection from '../component/CommentsSection';
import BannerSection from '../component/BannerSection';

export default function MainPage() {
  return (
    <>
      <BannerSection />
      <div className="px-40 py-10">
        <SiteSection />
        <PortFolioSection />
        <CommentsSection />
        <StackSection />
      </div>
    </>
  );
}
