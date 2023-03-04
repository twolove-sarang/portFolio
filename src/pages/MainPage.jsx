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
      <div className="px-10 py-10 md:px-40">
        <SiteSection />
        <PortFolioSection />
        <CommentsSection />
        <StackSection />
      </div>
    </>
  );
}
