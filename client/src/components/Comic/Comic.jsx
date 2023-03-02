import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, ComicsGrid__text } from './styles';
import { publicKey } from '../../constants';

const Comic = ({ limit = 1, order = 'focDate', mode = 'image', api, monthStart, monthEnd }) => {
  let url = `https://gateway.marvel.com:443/v1/public/comics?startYear=2023&orderBy=${order}&limit=${limit}&apikey=${publicKey}`;
  switch (api) {
    case 'perMonth':
      // PARA SETAR UM RANGE DE DATA USE: 'monthStart='2023-01'' e 'monthEnd='2023-02''
      url = `https://gateway.marvel.com:443/v1/public/comics?dateRange=${monthStart}%2C${monthEnd}&orderBy=${order}&limit=${limit}&apikey=${publicKey}`;
      break;
  }
  const [comics, setComics] = useState();
  useEffect(() => {
    (async () => {
      await axios
        .get(url)
        .catch((err) => console.log(err))
        .then((res) => setComics(res.data.data.results));
    })();
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
