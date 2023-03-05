import React from 'react';

export default function PortFolioSmallTitle({ name, style }) {
  return (
    <div style={style} className="text-xl mt-10">
      {name}
    </div>
  );
}
