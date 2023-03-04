import React from 'react';

export default function BannerSection() {
  return (
    <div
      style={{
        backgroundImage: 'url(site/sarang.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-teal-700 h-48 md:h-96 w-full"
    ></div>
  );
}
