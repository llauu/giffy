import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gif) => setGifs(gif));
  }, [keyword]);

  return gifs.map(({ title, url }) => (
    <Gif title={title} url={url} />
  ));
}
