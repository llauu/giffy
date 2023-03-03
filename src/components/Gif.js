import React from 'react';

export default function Gif({ title, url }) {
  return (
      <img className='gif-image' src={url} title={title} />
  );
}
