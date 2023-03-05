import React from 'react';

export default function PortFolioSmallTitle({ name, style }) {
  return (
    <div style={style} className="text-lg font-bold mt-10 mb-2">
      {name}
    </div>
  );
}
