import React from 'react';
import { Image, ComicsGrid__text, ComicTitle } from './styles';

const Comic = ({ list, mode, imageWidth }) => {
  let comics = list;
  if (comics === undefined) {
    return 'Waiting Data...';
  }
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
                  <div key={comic.id} style={{ cursor: 'pointer', width: `${imageWidth ? imageWidth : '230px'}` }}>
                    <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} imgWidth={imageWidth} />
                    <ComicTitle>
                      {typeof comic.characters.items[0] == 'undefined'
                        ? comic.series.name
                        : comic.characters.items[0].name}
                    </ComicTitle>
                    <ComicsGrid__text>
                      <p>
                        {typeof comic.creators.items[0] == 'undefined'
                          ? 'Desconhecido'
                          : comic.creators.items.length < 2
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
