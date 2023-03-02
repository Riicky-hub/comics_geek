import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, ComicsGrid__text } from './styles';
import { publicKey } from '../../constants';

const Comic = ({ limit = 1, order = 'focDate', mode = 'image' }) => {
  const url = `https://gateway.marvel.com:443/v1/public/comics?startYear=2023&orderBy=${order}&limit=${limit}&apikey=${publicKey}`;
  const [comics, setComics] = useState();
  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get(url).catch((err) => console.log(err));
      setComics(res.data.data.results);
    };
    fetchAll();
  }, [url]);
  switch (mode) {
    case 'image':
      return (
        <>
          {comics ? (
            <div>
              {comics.map((comic) => {
                return <Image key={comic.id} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />;
              })}
            </div>
          ) : (
            <></>
          )}
        </>
      );
    case 'product':
      return (
        <>
          {comics ? (
            <>
              {comics.map((comic) => {
                return (
                  <div key={comic.id} style={{ cursor: 'pointer' }}>
                    <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                    <h5>{comic.characters.items[0].name}</h5>
                    <ComicsGrid__text>
                      <p>
                        {comic.creators.items.length < 2
                          ? comic.creators.items[0].name
                          : `${comic.creators.items[0].name}...`}
                      </p>
                      <p>
                        <span>{`${comic.prices[0].price}R$`}</span>
                      </p>
                    </ComicsGrid__text>
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      );
  }
};

export default Comic;
