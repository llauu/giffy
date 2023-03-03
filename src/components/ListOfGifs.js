import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gif) => {
      setGifs(gif);
      setLoading(false);
    });
  }, [keyword]);

  if (loading)
    return (
      <div className='loader'>
        <div className='spinner'></div>
        <div className='text'>Loading...</div>
      </div>
    );

  return gifs.map(({ id, title, url }) => (
    <Gif key={id} title={title} url={url} />
  ));
}
